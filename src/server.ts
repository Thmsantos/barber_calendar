import { buildApp } from "./app.js";
import { env } from "./config/env";
import { connectMongo } from "./lib/mongo/index.js";

const app = buildApp();

const start = async () => {
  try {
    await connectMongo();
    await app.listen({ port: env.PORT });
    app.log.info("Server is running");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
