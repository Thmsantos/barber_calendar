import { ObjectId, Collection } from "mongodb";
import { Appointment } from "../Appointments";
import { getDb } from "../../../../lib/mongo";

export default class AppointmentRepository {

  private collection: Collection<Appointment>;

  constructor() {
    const db = getDb();
    this.collection = db.collection<Appointment>("appointments");
  }

  async create(data: Appointment) {
    return this.collection.insertOne(data);
  }

  async findByBarber(barberId: string) {
    return this.collection.find({
      barberId: new ObjectId(barberId)
    }).toArray();
  }

}
