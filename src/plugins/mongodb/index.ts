import fp from "fastify-plugin";
import { MongoClient } from "mongodb";
import { env } from "../../config/env";
import { FastifyInstance } from "fastify";

async function mongodb(app: FastifyInstance) {
  const client = new MongoClient(env.DATABASE_URI);

  await client.connect();

  app.decorate("mongo", client);

  app.log.info("Mongo connected");
}

export default fp(mongodb);