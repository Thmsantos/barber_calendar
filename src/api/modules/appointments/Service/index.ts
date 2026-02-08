import { appointmentsRepository } from "../Repository";
import CreateAppointmentsService from "./CreateAppointmentsService";
import FindAppointmentByBarberIdService from "./FindAppointmentByBarberIdService";

export const createAppointmentsService = new CreateAppointmentsService(appointmentsRepository);
export const findAppointmentByBarberIdService = new FindAppointmentByBarberIdService(appointmentsRepository);