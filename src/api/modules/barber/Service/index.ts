import { mongoBarberRepository } from "../Repository";
import CreateBarberService from "./CreateBarberService";
import FindBarberByIdService from "./FindBarberByIdService";
import PartialUpdateBarberService from "./PartialUpdateBarberService";

export const createBarberService = new CreateBarberService(mongoBarberRepository);

export const findBarberByIdService = new FindBarberByIdService(mongoBarberRepository);

export const partialUpdateBarberService = new PartialUpdateBarberService(mongoBarberRepository);