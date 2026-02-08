import { FastifyRequest } from "fastify";
import CreateAppointmentsService from "../Service/CreateAppointmentsService";

export default class CreateAppointmentsController{
    private createAppointmentService: CreateAppointmentsService;

    constructor(createAppointmentService: CreateAppointmentsService){
        this.createAppointmentService = createAppointmentService;
    }

    public async handle(request: FastifyRequest){
        await this.createAppointmentService.execute(request.body.appointment)
    }
}