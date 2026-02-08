import { Barber } from "../Barber";
import BarberRepository from "../Repository/BarberRepository";

export default class CreateBarberService{
    private barberRepository: BarberRepository;

    constructor(barberRepository: BarberRepository){
        this.barberRepository = barberRepository
    }

    public async execute(barber: Barber){
        await this.barberRepository.create(barber);
    }
}