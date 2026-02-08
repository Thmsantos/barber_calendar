import { createBarberService, findBarberByIdService, partialUpdateBarberService } from "../Service";
import CreateBarberController from "./CreateBarberController";
import FindBarberByIdController from "./FindBarberByIdController";
import PartialUpdateBarberController from "./PartialUpdateBarberController";

export const createBarberController = new CreateBarberController(createBarberService);

export const findBarberByIdController = new FindBarberByIdController(findBarberByIdService);

export const partialUpdateBarberController = new PartialUpdateBarberController(partialUpdateBarberService);