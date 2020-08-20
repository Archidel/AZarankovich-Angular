import {Component, OnInit} from '@angular/core';
import {Course} from '../../entity/Course';
import {ICourse} from '../../interfaces/ICourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {

  public courses: Course[];

  constructor() {

  }

  // temp data for representation
  public ngOnInit(): void {
    const tempDescrp = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.';

    this.courses = [
      new Course(0, 'Video Course 1. Name tag', tempDescrp, 5, new Date()),
      new Course(1, 'Video Course 2. Name tag', tempDescrp, 10, new Date()),
      new Course(2, 'Video Course 3. Name tag', tempDescrp, 15, new Date()),
      new Course(3, 'Video Course 4. Name tag', tempDescrp, 20, new Date()),
      new Course(4, 'Video Course 5. Name tag', tempDescrp, 25, new Date()),
      new Course(5, 'Video Course 6. Name tag', tempDescrp, 35, new Date()),
      new Course(6, 'Video Course 7. Name tag', tempDescrp, 40, new Date()),
      new Course(7, 'Video Course 8. Name tag', tempDescrp, 45, new Date()),
      new Course(8, 'Video Course 9. Name tag', tempDescrp, 50, new Date()),
      new Course(9, 'Video Course 10. Name tag', tempDescrp, 55, new Date()),
    ];
  }

  public onDelete(id: number): void {
    this.courses = this.courses.filter((course: ICourse) => course.id !== id);
  }

  public onLoadMoreClick(): void {
    console.log('load more click');
  }

}
