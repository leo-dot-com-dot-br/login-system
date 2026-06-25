import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./db/drizzle/schema.ts",
  dbCredentials: {
    url: "sqlite.db",
  },
});
