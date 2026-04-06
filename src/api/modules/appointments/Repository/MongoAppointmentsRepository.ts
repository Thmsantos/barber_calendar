import { ObjectId, Collection, InsertOneResult, WithId } from "mongodb";
import { Appointment } from "../Appointments";
import { getDatabase } from "../../../../lib/mongo";

export default class MongoAppointmentRepository {
  private collection: Collection<Appointment> | null = null;

  private async init() {
    if (!this.collection) {
      const db = await getDatabase();
      this.collection = db.collection<Appointment>("appointments");
    }
    return this.collection;
  }

  async create(data: Appointment): Promise<InsertOneResult<Appointment>> {
    const col = await this.init();
    return col.insertOne(data);
  }

  async findByBarber(barberId: string): Promise<WithId<Appointment> | null> {
    const col = await this.init();
    console.log(barberId, await col.findOne({barberId: new ObjectId(barberId)}))
    return col.findOne({ barberId: new ObjectId(barberId) })
  }
}
