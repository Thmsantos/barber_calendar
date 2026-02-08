import { FastifyReply, FastifyRequest } from "fastify";
import CreateAppointmentsService from "../Service/CreateAppointmentsService";
import { Appointment } from "../Appointments";

export default class CreateAppointmentsController {
    private createAppointmentService: CreateAppointmentsService;

    constructor(createAppointmentService: CreateAppointmentsService) {
        this.createAppointmentService = createAppointmentService;
    }

    public async handle(
        request: FastifyRequest<{ Body: { appointment: Appointment } }>,
        reply: FastifyReply
    ) {
        try {
            const { appointment } = request.body;
            const created = await this.createAppointmentService.execute(appointment);

            return reply.code(201).send(created);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send({
                message: "Internal Server Error"
            });
        }
    }
}