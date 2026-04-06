import { mongoAppointmentsRepository } from "../Repository";
import CreateAppointmentsService from "./CreateAppointmentsService";
import FindAppointmentByBarberIdService from "./FindAppointmentByBarberIdService";

export const createAppointmentsService = new CreateAppointmentsService(mongoAppointmentsRepository);
export const findAppointmentByBarberIdService = new FindAppointmentByBarberIdService(mongoAppointmentsRepository);