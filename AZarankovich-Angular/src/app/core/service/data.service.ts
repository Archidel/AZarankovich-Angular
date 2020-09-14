import {Injectable} from '@angular/core';
import {Course} from '../../entity/Course';
import {IUser} from '../../interfaces/IUser';
import {ICourse} from '../../interfaces/ICourse';
import {User} from '../../entity/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public courses: ICourse[];
  public users: IUser[];

  constructor() {
    const tempDescrp = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.';

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 20);

    const freshDate = new Date();
    freshDate.setDate(freshDate.getDate() - 10);

    this.courses = [
      new Course(0, 'Video Course 1. Name tag', tempDescrp, 125, futureDate, false),
      new Course(1, 'Video Course 2. Name tag', tempDescrp, 10, freshDate, false),
      new Course(2, 'Video Course 3. Name tag', tempDescrp, 15, new Date(), true),
      new Course(3, 'Video Course 4. Name tag', tempDescrp, 20, futureDate, false),
      new Course(4, 'Video Course 5. Name tag', tempDescrp, 25, new Date(), false),
      new Course(5, 'Video Course 6. Name tag', tempDescrp, 35, freshDate, false),
      new Course(6, 'Video Course 7. Name tag', tempDescrp, 40, new Date(), true),
      new Course(7, 'Video Course 8. Name tag', tempDescrp, 45, futureDate, false),
      new Course(8, 'Video Course 9. Name tag', tempDescrp, 50, new Date(), false),
      new Course(9, 'Video Course 10. Name tag', tempDescrp, 55, freshDate, false),
    ];

    this.users = [
      new User(0, 'user1', 'user1', 'user1@gmail.com', 'root'),
      new User(1, 'user2', 'user2', 'user2@gmail.com', 'root'),
      new User(2, 'user3', 'user3', 'user3@gmail.com', 'root'),
      new User(3, 'user4', 'user4', 'user4@gmail.com', 'root')
    ];
  }
}
