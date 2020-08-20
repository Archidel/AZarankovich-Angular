import {ICourse} from '../interfaces/ICourse';

export class Course implements ICourse {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public duration: number,
    public creationDate: Date
  ) {}

}
