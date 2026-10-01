import { test, expect } from "@playwright/test";
import { config } from "dotenv";
import postgres from "postgres";
import { randomUUID, randomBytes } from "node:crypto";
import { hashPassword } from "better-auth/crypto";

config({ path: ".env.local", quiet: true });
const userId = randomUUID();
const email = `auth-test-${userId}@example.invalid`;
const password = randomBytes(24).toString("base64url");
const sql = postgres(process.env.DATABASE_URL!, { max: 1 });
const testIP = `198.18.${Math.floor(Math.random() * 254)}.${Math.floor(Math.random() * 254) + 1}`;

test.beforeAll(async () => {
  const passwordHash = await hashPassword(password);
  await sql.begin(async tx => {
    await tx`INSERT INTO users (id, name, email, system_role) VALUES (${userId}, 'Auth Test User', ${email}, 'member')`;
    await tx`INSERT INTO accounts (id, account_id, provider_id, user_id, password) VALUES (${randomUUID()}, ${userId}, 'credential', ${userId}, ${passwordHash})`;
  });
});
test.afterAll(async () => {
  await sql`DELETE FROM users WHERE id = ${userId} AND email = ${email}`;
  await sql`DELETE FROM auth_rate_limits WHERE key LIKE ${testIP + '%'}`;
  await sql.end();
});

test("login UI validates input and fits desktop/mobile", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 1024 });
  await page.goto("/login");
  await expect(page.getByRole("heading", { name: "Sign In to Your Workspace" })).toBeVisible();
  await page.screenshot({ path: "test-results/login-desktop.png", fullPage: true });
  await page.getByRole("button", { name: "Sign In to Project Console" }).click();
  await expect(page.getByText("Enter a valid corporate email address.")).toBeVisible();
  await expect(page.getByText("Enter your password.", { exact: true })).toBeVisible();
  await page.locator("#password").fill("sample-password");
  await page.getByRole("button", { name: "Show password" }).click();
  await expect(page.locator("#password")).toHaveAttribute("type", "text");
  await page.getByRole("button", { name: "Hide password" }).click();
  await expect(page.locator("#password")).toHaveAttribute("type", "password");
  await page.getByRole("button", { name: "Forgot password?" }).click();
  await expect(page.getByRole("status")).toContainText("contact your project administrator");
  await page.getByRole("button", { name: "Dismiss" }).click();
  await page.reload();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "test-results/login-mobile.png", fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const images = await page.locator("img").evaluateAll(elements => elements.map(el => ({ src: (el as HTMLImageElement).src, loaded: (el as HTMLImageElement).complete && (el as HTMLImageElement).naturalWidth > 0 })));
  expect(images.length).toBeGreaterThanOrEqual(14);
  expect(images.every(img => img.loaded)).toBe(true);
});

test("server protects workspace, credentials work, logout revokes the session", async ({ page, context }) => {
  await context.setExtraHTTPHeaders({ "x-forwarded-for": testIP });
  await page.goto("/projects");
  await expect(page).toHaveURL(/\/login$/);
  await page.getByLabel("CORPORATE EMAIL", { exact: false }).fill(email);
  await page.locator("#password").fill("incorrect-password");
  await page.getByRole("button", { name: "Sign In to Project Console" }).click();
  await expect(page.locator(".login-alert")).toContainText("Email or password is incorrect");
  await page.locator("#password").fill(password);
  await page.getByRole("button", { name: "Sign In to Project Console" }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByText("Auth Test User")).toBeVisible();
  const cookies = await context.cookies();
  const session = cookies.find(cookie => cookie.name.endsWith("better-auth.session_token"));
  expect(session?.httpOnly).toBe(true);
  expect(session?.expires).toBe(-1);
  const [storedSession] = await sql`SELECT id FROM sessions WHERE user_id = ${userId}`;
  expect(storedSession).toBeTruthy();
  await page.goto("/login");
  await expect(page).toHaveURL(/\/dashboard$/);
  await page.getByRole("button", { name: "Sign out" }).click();
  await expect(page).toHaveURL(/\/login$/);
  expect(await sql`SELECT id FROM sessions WHERE user_id = ${userId}`).toHaveLength(0);
  if (session) await context.addCookies([session]);
  await page.goto("/dashboard");
  await expect(page).toHaveURL(/\/login$/);
});

test("auth API blocks public signup, cross-origin login, privilege injection and excessive attempts", async ({ request }) => {
  const headers = { origin: "http://localhost:3000", "x-forwarded-for": testIP };
  const signup = await request.post("/api/auth/sign-up/email", { headers, data: { email, password, name: "No signup" } });
  expect(signup.ok()).toBe(false);
  const crossOrigin = await request.post("/api/auth/sign-in/email", { headers: { ...headers, origin: "https://untrusted.example" }, data: { email, password } });
  expect(crossOrigin.status()).toBe(403);
  const login = await request.post("/api/auth/sign-in/email", { headers, data: { email, password, rememberMe: true } });
  expect(login.ok()).toBe(true);
  expect(login.headers()["set-cookie"]).toMatch(/Max-Age=/i);
  await request.post("/api/auth/update-user", { headers, data: { systemRole: "admin" } });
  const [user] = await sql`SELECT system_role FROM users WHERE id = ${userId}`;
  expect(user.system_role).toBe("member");
  let throttled = false;
  for (let i = 0; i < 8; i++) {
    const response = await request.post("/api/auth/sign-in/email", { headers, data: { email, password: "bad-password" } });
    if (response.status() === 429) { throttled = true; break; }
  }
  expect(throttled).toBe(true);
});
