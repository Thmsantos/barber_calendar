import Fastify from "fastify";
import autoload from "@fastify/autoload";
import path from "node:path";
import { barberRoutes } from "./api/routes/Barber";
import { appointmentsRoutes } from "./api/routes/Appointments";

export function buildApp() {
  const app = Fastify({
    logger: {
      transport: {
        target: "pino-pretty"
      }
    }
  });

  app.register(appointmentsRoutes, {
    prefix: "/appointments"
  })

  app.register(barberRoutes, {
    prefix: "/barber"
  })

  app.register(autoload, {
    dir: path.join(__dirname, "plugins")
  });

  app.register(autoload, {
    dir: path.join(__dirname, "modules")
  });

  return app;
}
