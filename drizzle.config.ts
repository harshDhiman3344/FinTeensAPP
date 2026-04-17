import "dotenv/config";
import type { Config } from "drizzle-kit";

// DATABASE_URL is optional - will be required when setting up the database
const databaseUrl = process.env.DATABASE_URL || "postgresql://placeholder:placeholder@localhost:5432/finteens?sslmode=require";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
} satisfies Config;
