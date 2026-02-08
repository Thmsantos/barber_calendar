import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";

async function mongoIndexes(app: FastifyInstance) {

  const db = app.mongo.db();

  await db.collection("barbers").createIndex(
    { name: 1 },
    { unique: true }
  );

  await db.collection("appointments").createIndex(
    { barberId: 1, day: 1, hour: 1 },
    { unique: true }
  );

  app.log.info("Mongo indexes created");
}

export default fp(mongoIndexes);
