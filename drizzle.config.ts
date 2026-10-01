import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({ path: ".env.local" });
config();
export default defineConfig({
  schema: "./src/server/db/schema.ts", out: "./drizzle", dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL ?? "postgresql://estima:estima_local@localhost:5432/estima" },
});
