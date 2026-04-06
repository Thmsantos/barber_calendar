import { InsertOneResult, WithId } from "mongodb";
import { Appointment } from "../../Appointments";

export interface AppointmentRepository {
  create(data: Appointment): Promise<InsertOneResult<Appointment>>;
  findByBarber(barberId: string): Promise<WithId<Appointment> | null>;
}