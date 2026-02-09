import { buildApp } from "./app";
import { env } from "./config/env";

const app = buildApp();

const start = async () => {
  try {
    await app.listen({ port: env.PORT });
    app.log.info("Server is running");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
