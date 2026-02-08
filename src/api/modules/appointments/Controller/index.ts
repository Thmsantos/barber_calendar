import { createAppointmentsService, findAppointmentByBarberIdService } from "../Service";
import CreateAppointmentsController from "./CreateAppointmentsController";
import FindAppointmentByBarberIdController from "./FindAppointmentByBarberIdController";

export const findAppointmentByBarberIdController = new FindAppointmentByBarberIdController(findAppointmentByBarberIdService);
export const createAppointmentsController = new CreateAppointmentsController(createAppointmentsService);