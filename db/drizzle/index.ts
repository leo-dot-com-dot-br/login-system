import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

const sqliteDatabase = new Database("sqlite.db");
export const db = drizzle(sqliteDatabase, {
  schema: schema,
  logger: false,
});
