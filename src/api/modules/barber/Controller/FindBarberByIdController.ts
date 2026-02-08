import { FastifyReply, FastifyRequest } from "fastify";
import FindBarberByIdService from "../Service/FindBarberByIdService";

export default class FindBarberByIdController {
    private findBarberByIdService: FindBarberByIdService;

    constructor(findBarberByIdService: FindBarberByIdService) {
        this.findBarberByIdService = findBarberByIdService
    }

    public async handle(
        request: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) {
        try {
            const { id } = request.params;
            const findedBarber = await this.findBarberByIdService.execute(id);

            return reply.code(200).send(findedBarber);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send({
                message: "Internal Server Error"
            });
        }
    }
}