import { MongoClient } from "mongodb";

declare module "fastify" {
  interface FastifyInstance {
    mongo: MongoClient;
  }
}
