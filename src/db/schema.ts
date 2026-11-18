import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

/**
 * Primary conversion destination for this site.
 * Submissions are validated on the server before insert; no request is ever
 * acknowledged unless it has been persisted.
 */
export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  email: varchar("email", { length: 254 }),
  message: text("message").notNull(),
  sourcePath: varchar("source_path", { length: 300 }),
  userAgent: varchar("user_agent", { length: 400 }),
  status: varchar("status", { length: 32 }).notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
