import Fastify from "fastify";
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

  return app;
}
