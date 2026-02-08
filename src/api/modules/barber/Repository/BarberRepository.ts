import { ObjectId } from "mongodb";
import { Barber } from "../Barber";
import { getDb } from "../../../../lib/mongo";

export default class BarberRepository {
  private collection;

  constructor() {
    const db = getDb();
    this.collection = db.collection<Barber>("barbers");
  }

  async create(data: Barber) {
    const result = await this.collection.insertOne(data);
    return result;
  }

  async findById(id: string) {
    return this.collection.findOne({
      _id: new ObjectId(id),
    });
  }

  async update(id: string, data: Partial<Barber>) {
    await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
  }
}
