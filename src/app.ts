import Fastify from "fastify";
import autoload from "@fastify/autoload";
import path from "node:path";

export function buildApp() {
  const app = Fastify({
    logger: {
      transport: {
        target: "pino-pretty"
      }
    }
  });

  app.register(autoload, {
    dir: path.join(__dirname, "plugins")
  });

  app.register(autoload, {
    dir: path.join(__dirname, "modules")
  });

  return app;
}
