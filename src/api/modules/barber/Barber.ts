import { ObjectId } from "mongodb";

export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type WorkSchedule = {
  itWorks: boolean;
  startTime: string;
  endTime: string;
};

export type Client = {
    clientName: string;
    procces: string;
}

export type Marked = {
    day: string;
    hour: string;
    client: Client
}

export type DaysOfWork = Record<WeekDay, WorkSchedule>;

export type Barber = {
  _id?: ObjectId;
  name: string;
  key: ObjectId;
  daysOfWork: DaysOfWork;
  marked: Marked;
};
