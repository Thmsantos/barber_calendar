import { config } from "dotenv";
import { MongoClient, Db } from "mongodb";
import { env } from "../../config/env";

config()
let cachedDb: Db | null = null;

export async function getDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb;

  const client = new MongoClient(env.DATABASE_URI);
  await client.connect();
  cachedDb = client.db(env.DATABASE_NAME);

  return cachedDb;
}
