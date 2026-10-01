import "server-only";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
const globalDb = globalThis as unknown as { estimaSql?: ReturnType<typeof postgres> };
export function getDb() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
  const sql = globalDb.estimaSql ??= postgres(process.env.DATABASE_URL, { max: 10, prepare: false });
  return drizzle(sql, { schema });
}
