import { FastifyReply, FastifyRequest } from "fastify";
import FindAppointmentByBarberIdService from "../Service/FindAppointmentByBarberIdService";

export default class FindAppointmentByBarberIdController {
    private findAppointmentsByBarberIdService: FindAppointmentByBarberIdService;

    constructor(findAppointmentsByBarberIdService: FindAppointmentByBarberIdService) {
        this.findAppointmentsByBarberIdService = findAppointmentsByBarberIdService;
    }

    public async handle(
        request: FastifyRequest<{ Params: { barberId: string } }>,
        reply: FastifyReply
    ) {
        try {
            const { barberId } = request.params;
            const findedAppointment = await this.findAppointmentsByBarberIdService.execute(barberId);

            return reply.code(200).send(findedAppointment);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send({
                message: "Internal Server Error"
            });
        }
    }
}