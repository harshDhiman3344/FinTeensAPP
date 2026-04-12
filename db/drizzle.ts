import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

// DATABASE_URL is optional - will be required when database is set up
const databaseUrl = process.env.DATABASE_URL || "postgresql://placeholder:placeholder@localhost:5432/lingo?sslmode=require";
const sql = neon(databaseUrl);
const db = drizzle(sql, { schema });

export default db;
