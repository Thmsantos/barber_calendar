import { FastifyRequest } from "fastify";
import FindBarberByIdService from "../Service/FindBarberByIdService";

export default class FindBarberByIdController {
    private findBarberByIdService: FindBarberByIdService;

    constructor(findBarberByIdService: FindBarberByIdService) {
        this.findBarberByIdService = findBarberByIdService
    }

    public async handle(request: FastifyRequest) {
        try {
            await this.findBarberByIdService.execute(request.body.id)
        } catch (error) {
            console.error(error)
        }
    }
}