import Fastify from "fastify";

export function buildApp() {
  const app = Fastify({
    logger: {
      level: "info"
    }
  });

  return app;
}
