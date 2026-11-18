import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __krcDatabase?: NodePgDatabase;
};

/**
 * Lazily initialize the database client.
 *
 * Next.js imports Route Handler modules while collecting build metadata, so
 * validating DATABASE_URL at import time breaks builds and preview deploys
 * where the variable has not been configured yet. The check happens on first
 * use instead, and the client is cached for the lifetime of the instance.
 */
export function getDb(): NodePgDatabase {
  if (!globalForDb.__krcDatabase) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is required");
    }

    const pool = new Pool({ connectionString: databaseUrl });
    globalForDb.__krcDatabase = drizzle(pool);
  }

  return globalForDb.__krcDatabase;
}
