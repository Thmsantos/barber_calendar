import { FastifyRequest } from "fastify";
import { Barber } from "../Barber";
import BarberRepository from "../Repository/BarberRepository";
import CreateBarberService from "../Service/CreateBarberService";

export default class CreateBarberController{
    private createBarberService: CreateBarberService;

    constructor(createBarberService: CreateBarberService){
        this.createBarberService = createBarberService
    }

    public async handle(request: FastifyRequest){
        try{
            await this.createBarberService(request.body.barber)
        }catch (error){
            console.error(error)
        }
    }
}