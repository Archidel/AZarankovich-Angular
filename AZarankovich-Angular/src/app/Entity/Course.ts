import {ICourse} from "../Interfaces/ICourse";

export class Course implements ICourse {
  creationDate: Date;
  description: String;
  duration: Number;
  id: number;
  title: string;
}
