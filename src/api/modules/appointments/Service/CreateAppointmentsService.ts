import { InsertOneResult } from "mongodb";
import { Appointment } from "../Appointments";
import { AppointmentRepository } from "../Repository/interface";
import { Service } from "../../../interfaces";

export default class CreateAppointmentsService implements Service<Appointment, InsertOneResult<Appointment>>{
    private repository: AppointmentRepository;

    constructor(
        appointmentRepository: AppointmentRepository
    ){
        this.repository = appointmentRepository
    }

    public async execute(appointment: Appointment): Promise<InsertOneResult<Appointment>>{
        const createdAppointment = await this.repository.create(appointment)
        return createdAppointment;
    }
}