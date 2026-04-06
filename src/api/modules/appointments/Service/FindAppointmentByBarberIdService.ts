import { WithId } from "mongodb";
import { AppointmentRepository } from "../Repository/interface";
import { Appointment } from "../Appointments";
import { Service } from "../../../interfaces";

export default class FindAppointmentByBarberIdService implements Service<string, WithId<Appointment> | null>{
    private repository: AppointmentRepository;

    constructor(
        appointmentRepository: AppointmentRepository
    ) {
        this.repository = appointmentRepository
    }
    
    public async execute(id: string): Promise<WithId<Appointment> | null> {
        const findedAppointment = await this.repository.findByBarber(id)
        return findedAppointment;
    }
}