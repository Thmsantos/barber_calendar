import PartialUpdateBarberService from "../Service/PartialUpdateBarberService";

export default class PartialUpdateBarberController {
    private partialUpdateBarberService: PartialUpdateBarberService;

    constructor(partialUpdateBarberService: PartialUpdateBarberService) {
        this.partialUpdateBarberService = partialUpdateBarberService
    }

    public async handle(request: FastifyRequest) {
        try {
            await this.partialUpdateBarberService.execute(request.body.barber)
        } catch (error) {
            console.error(error)
        }
    }
}