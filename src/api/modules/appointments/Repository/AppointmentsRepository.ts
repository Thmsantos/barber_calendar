import { ObjectId, Collection } from "mongodb";
import { Appointment } from "../Appointments";
import { getDatabase } from "../../../../lib/mongo";

export default class AppointmentRepository {
  private collection: Collection<Appointment> | null = null;

  private async init() {
    if (!this.collection) {
      const db = await getDatabase();
      this.collection = db.collection<Appointment>("appointments");
    }
    return this.collection;
  }

  async create(data: Appointment) {
    const col = await this.init();
    return col.insertOne(data);
  }

  async findByBarber(barberId: string) {
    const col = await this.init();
    return col
      .find({ barberId: new ObjectId(barberId) })
      .toArray();
  }
}
