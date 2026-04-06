import { UpdateResult } from "mongodb";
import { Barber } from "../Barber";
import { BarberRepository } from "../Repository/interfaces/repository";
import { Service } from "../../../interfaces";

export default class PartialUpdateBarberService implements Service<Barber, UpdateResult<Barber>>{
    private barberRepository: BarberRepository;

    constructor(barberRepository: BarberRepository){
        this.barberRepository = barberRepository
    }

    public async execute(barber: Barber): Promise<UpdateResult<Barber>>{
        const updatedBarber = await this.barberRepository.update(String(barber._id), barber);
        return updatedBarber;
    }
}