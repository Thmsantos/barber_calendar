import { ObjectId, Collection, InsertOneResult, WithId, UpdateResult } from "mongodb";
import { Barber } from "../Barber";
import { getDatabase } from "../../../../lib/mongo";
import { BarberRepository } from "./interfaces/repository";

export default class MongoBarberRepository implements BarberRepository{
  private collection?: Collection<Barber>;

  private async initCollection() {
    if (!this.collection) {
      const db = await getDatabase();
      this.collection = db.collection<Barber>("barbers");
    }
    return this.collection;
  }

  async create(data: Barber): Promise<InsertOneResult<Barber>> {
    const col = await this.initCollection();
    return col.insertOne(data);
  }

  async findById(id: string): Promise<WithId<Barber> | null> {
    const col = await this.initCollection();
    return col.findOne({ _id: new ObjectId(id) });
  }

  async update(id: string, data: Partial<Barber>): Promise<UpdateResult<Barber>> {
    const col = await this.initCollection();
    return col.updateOne({ _id: new ObjectId(id) }, { $set: data });
  }
}
