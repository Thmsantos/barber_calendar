import { buildApp } from "./app";

const app = buildApp();

const start = async () => {
  try {
    await app.listen({ port: 9090 });
    app.log.info("Server is running");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
