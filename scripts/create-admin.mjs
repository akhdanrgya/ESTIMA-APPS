import { config } from "dotenv";
import { createInterface } from "node:readline/promises";
import { Writable } from "node:stream";
import { randomUUID } from "node:crypto";
import postgres from "postgres";
import { hashPassword } from "better-auth/crypto";
import { z } from "zod";

config({ path: ".env.local", quiet: true });
config({ quiet: true });
if (!process.env.DATABASE_URL) throw new Error("Set DATABASE_URL in .env.local first.");
let muted = false;
const output = new Writable({ write(chunk, encoding, done) { if (!muted) process.stdout.write(chunk, encoding); done(); } });
const terminal = createInterface({ input: process.stdin, output, terminal: Boolean(process.stdin.isTTY) });
const sql = postgres(process.env.DATABASE_URL, { max: 1 });
try {
  const name = process.env.ESTIMA_ADMIN_NAME ?? await terminal.question("Admin name: ");
  const email = process.env.ESTIMA_ADMIN_EMAIL ?? await terminal.question("Admin email: ");
  let password = process.env.ESTIMA_ADMIN_PASSWORD;
  if (!password) {
    if (!process.stdin.isTTY) throw new Error("Use an interactive terminal or set ESTIMA_ADMIN_PASSWORD.");
    process.stdout.write("Admin password (hidden; 12–128 characters): ");
    muted = true;
    password = await terminal.question("");
    muted = false;
    process.stdout.write("\n");
  }
  const input = z.object({ name: z.string().trim().min(2).max(120), email: z.string().trim().toLowerCase().pipe(z.email()), password: z.string().min(12).max(128) }).parse({ name, email, password });
  const passwordHash = await hashPassword(input.password);
  await sql.begin(async tx => {
    // Serialize bootstrap attempts and never overwrite an existing administrator.
    await tx`SELECT pg_advisory_xact_lock(7092026)`;
    const existing = await tx`SELECT id FROM users WHERE system_role = 'admin' LIMIT 1`;
    if (existing.length) throw new Error("An administrator already exists. Bootstrap was not applied.");
    const id = randomUUID();
    await tx`INSERT INTO users (id, name, email, email_verified, system_role) VALUES (${id}, ${input.name}, ${input.email}, false, 'admin')`;
    await tx`INSERT INTO accounts (id, account_id, provider_id, user_id, password) VALUES (${randomUUID()}, ${id}, 'credential', ${id}, ${passwordHash})`;
    await tx`INSERT INTO audit_logs (id, actor_id, action, entity_type, entity_id) VALUES (${randomUUID()}, ${id}, 'admin.bootstrap', 'user', ${id})`;
  });
  console.log("First administrator created. Sign in at /login. Project access is assigned separately.");
} catch (error) {
  console.error(error instanceof z.ZodError ? "Invalid input: name, valid email, and 12–128 character password are required." : error instanceof Error ? error.message : "Unable to create administrator.");
  process.exitCode = 1;
} finally { muted = false; terminal.close(); await sql.end(); }
