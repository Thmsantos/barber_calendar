import { MongoClient, Db } from "mongodb";
import { env } from "../../config/env";

const client = new MongoClient(env.DATABASE_URI);
const databaseName = env.DATABASE_NAME
let db: Db;

export async function connectMongo() {
  if (!db) {
    await client.connect();
    db = client.db(databaseName)
  }
  return db;
}

export function getDb() {
  if (!db) {
    throw new Error("error to connect mongo");
  }
  return db;
}
