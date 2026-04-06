import { ObjectId } from "mongodb";
import { Client } from "../barber/Barber";

export type Appointment = {
  _id?: ObjectId;
  barberId: ObjectId;
  description: string;
  day: string;
  hour: string;
  client: Client;
};
