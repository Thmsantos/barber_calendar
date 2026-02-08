import { Barber } from "../Barber";
import BarberRepository from "../Repository/BarberRepository";

export default class FindBarberByIdService{
    private barberRepository: BarberRepository;

    constructor(barberRepository: BarberRepository){
        this.barberRepository = barberRepository
    }

    public async execute(id: string){
        await this.barberRepository.findById(id);
    }
}