import { Barber } from "../Barber";
import BarberRepository from "../Repository/BarberRepository";

export default class PartialUpdateBarberService{
    private barberRepository: BarberRepository;

    constructor(barberRepository: BarberRepository){
        this.barberRepository = barberRepository
    }

    public async execute(barber: Barber){
        await this.barberRepository.update(String(barber._id), barber);
    }
}