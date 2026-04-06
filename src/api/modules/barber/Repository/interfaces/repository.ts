import { InsertOneResult, UpdateResult, WithId } from "mongodb";
import { Barber } from "../../Barber";

export interface BarberRepository {
  create(data: Barber): Promise<InsertOneResult<Barber>>;
  findById(id: string): Promise<WithId<Barber> | null>;
  update(id: string, data: Partial<Barber>): Promise<UpdateResult<Barber>>;
}