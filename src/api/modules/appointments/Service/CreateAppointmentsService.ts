import { Appointment } from "../Appointments";
import AppointmentRepository from "../Repository/AppointmentsRepository";

export default class CreateAppointmentsService{
    private repository: AppointmentRepository;

    constructor(
        appointmentRepository: AppointmentRepository
    ){
        this.repository = appointmentRepository
    }

    public async execute(appointment: Appointment){
        await this.repository.create(appointment)
    }
}