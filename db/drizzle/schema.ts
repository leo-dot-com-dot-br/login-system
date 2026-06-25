import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  password: text("password"),
  image: text("image"),
});

export const accounts = sqliteTable("accounts", {
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  access_token: text("access_token"),
  refresh_token: text("refresh_token"),
});

export const sessions = sqliteTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});
