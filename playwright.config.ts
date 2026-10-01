import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/auth", fullyParallel: false, workers: 1, retries: 0,
  use: { baseURL: "http://localhost:3000", ...devices["Desktop Chrome"], channel: "msedge", trace: "retain-on-failure" },
  webServer: { command: "npm run dev -- --hostname localhost", url: "http://localhost:3000/api/health", reuseExistingServer: true, timeout: 90_000 },
});
