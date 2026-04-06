import { WithId } from "mongodb";
import { BarberRepository } from "../Repository/interfaces/repository";
import { Barber } from "../Barber";
import { Service } from "../../../interfaces";

export default class FindBarberByIdService implements Service<string, WithId<Barber> | null> {

  private barberRepository: BarberRepository;

  constructor(barberRepository: BarberRepository) {
    this.barberRepository = barberRepository;
  }

  public async execute(id: string): Promise<WithId<Barber> | null> {
    const foundBarber = await this.barberRepository.findById(id);
    return foundBarber;
  }
}