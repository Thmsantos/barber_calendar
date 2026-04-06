import { InsertOneResult } from "mongodb";
import { Barber } from "../Barber";
import { BarberRepository } from "../Repository/interfaces/repository";
import { Service } from "../../../interfaces";

export default class CreateBarberService implements Service<Barber, InsertOneResult<Barber>>{
    private barberRepository: BarberRepository;

    constructor(barberRepository: BarberRepository){
        this.barberRepository = barberRepository
    }

    public async execute(barber: Barber): Promise<InsertOneResult<Barber>>{
        const createdBarber = await this.barberRepository.create(barber);
        return createdBarber;
    }
}