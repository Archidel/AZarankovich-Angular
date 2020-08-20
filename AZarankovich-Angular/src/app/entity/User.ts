import {IUser} from '../interfaces/IUser';

export class User implements IUser {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
  ) {}

}
