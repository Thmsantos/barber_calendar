import { MongoClient } from "mongodb";
import { FastifyReply, FastifyRequest } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    mongo: MongoClient;
  }
}
