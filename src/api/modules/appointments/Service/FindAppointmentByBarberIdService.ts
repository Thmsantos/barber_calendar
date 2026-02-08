import AppointmentRepository from "../Repository/AppointmentsRepository";

export default class FindAppointmentByBarberIdService {
    private repository: AppointmentRepository;

    constructor(
        appointmentRepository: AppointmentRepository
    ) {
        this.repository = appointmentRepository
    }
    
    public async execute(id: string) {
        await this.repository.findByBarber(id)
    }
}