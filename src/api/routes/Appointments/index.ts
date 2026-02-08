import { FastifyInstance } from "fastify";
import { createAppointmentsController, findAppointmentByBarberIdController } from "../../modules/appointments/Controller";
import { createAppointmentSchema, findAppointmentSchema } from "../../modules/appointments/Schemas";
import { Appointment } from "../../modules/appointments/Appointments";


export async function appointmentsRoutes(app: FastifyInstance) {

    app.post<{ Body: { appointment: Appointment } }>(
        "/",
        { schema: createAppointmentSchema },
        async (request, reply) =>
            createAppointmentsController.handle(request, reply)
    );

    app.get<{ Params: { id: string } }>(
        "/:barberId",
        { schema: findAppointmentSchema },
        async (request, reply) =>
            findAppointmentByBarberIdController.handle(request, reply)
    );

}
