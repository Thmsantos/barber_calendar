import { ObjectId, Collection } from "mongodb";
import { Barber } from "../Barber";
import { getDatabase } from "../../../../lib/mongo";

export default class BarberRepository {
  private collection?: Collection<Barber>;

  private async initCollection() {
    if (!this.collection) {
      const db = await getDatabase();
      this.collection = db.collection<Barber>("barbers");
    }
    return this.collection;
  }

  async create(data: Barber) {
    const col = await this.initCollection();
    return col.insertOne(data);
  }

  async findById(id: string) {
    const col = await this.initCollection();
    return col.findOne({ _id: new ObjectId(id) });
  }

  async update(id: string, data: Partial<Barber>) {
    const col = await this.initCollection();
    return col.updateOne({ _id: new ObjectId(id) }, { $set: data });
  }
}
