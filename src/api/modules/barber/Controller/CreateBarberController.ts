import { FastifyReply, FastifyRequest } from "fastify";
import { Barber } from "../Barber";
import CreateBarberService from "../Service/CreateBarberService";

export default class CreateBarberController {
    private createBarberService: CreateBarberService;

    constructor(createBarberService: CreateBarberService) {
        this.createBarberService = createBarberService
    }

    public async handle(
        request: FastifyRequest<{ Body: { barber: Barber } }>,
        reply: FastifyReply
    ) {

        try {
            const { barber } = request.body;
            const created = await this.createBarberService.execute(barber);

            return reply.code(201).send(created);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send({
                message: "Internal Server Error"
            });
        }
    }
}