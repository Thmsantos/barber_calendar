import { barberRepository } from "../Repository";
import CreateBarberService from "./CreateBarberService";
import FindBarberByIdService from "./FindBarberByIdService";
import PartialUpdateBarberService from "./PartialUpdateBarberService";

export const createBarberService = new CreateBarberService(barberRepository);

export const findBarberByIdService = new FindBarberByIdService(barberRepository);

export const partialUpdateBarberService = new PartialUpdateBarberService(barberRepository);