import { FastifyReply, FastifyRequest } from "fastify";
import { Barber } from "../Barber";
import PartialUpdateBarberService from "../Service/PartialUpdateBarberService";

export default class PartialUpdateBarberController {
    private partialUpdateBarberService: PartialUpdateBarberService;

    constructor(partialUpdateBarberService: PartialUpdateBarberService) {
        this.partialUpdateBarberService = partialUpdateBarberService
    }

    public async handle(
        request: FastifyRequest<{ Body: { barber: Barber } }>,
        reply: FastifyReply
    ) {

        try {
            const { barber } = request.body;
            const updated = await this.partialUpdateBarberService.execute(barber);

            return reply.code(201).send(updated);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send({
                message: "Internal Server Error"
            });
        }
    }
}