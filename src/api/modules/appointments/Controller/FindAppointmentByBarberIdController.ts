import { FastifyRequest } from "fastify";
import FindAppointmentByBarberIdService from "../Service/FindAppointmentByBarberIdService";

export default class FindAppointmentByBarberIdController{
    private findAppointmentsByBarberIdService: FindAppointmentByBarberIdService;

    constructor(findAppointmentsByBarberIdService: FindAppointmentByBarberIdService){
        this.findAppointmentsByBarberIdService = findAppointmentsByBarberIdService;
    }

    public async handle(request: FastifyRequest){
        try{
            await this.findAppointmentsByBarberIdService.execute(request.body.id)
        } catch (error){
            console.error(error);
        }
    }
}