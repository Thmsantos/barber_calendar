import { FastifyInstance } from "fastify";
import { createBarberController, findBarberByIdController, partialUpdateBarberController } from "../../modules/barber/Controller";
import { Barber } from "../../modules/barber/Barber";


export async function barberRoutes(app: FastifyInstance) {
    app.post<{ Body: { barber: Barber } }>(
        "/",
        async (request, reply) =>
            createBarberController.handle(request, reply)
    );

    app.get<{ Params: { id: string } }>(
        "/:id",
        async (request, reply) =>
            findBarberByIdController.handle(request, reply)
    );

    app.put<{ Body: { barber: Barber } }>(
        "/:id",
        async (request, reply) =>
            partialUpdateBarberController.handle(request, reply)
    );

}
