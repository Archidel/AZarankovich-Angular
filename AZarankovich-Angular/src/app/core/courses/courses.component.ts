import {Component, OnInit} from '@angular/core';
import {ICourse} from '../../interfaces/ICourse';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {

  public courses: ICourse[];

  constructor(private courseService: CourseService) {
  }

  public ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  public onDelete(id: number): void {
    this.courses = this.courseService.removeItem(id);
  }

  public onLoadMoreClick(): void {
    console.log('load more click');
  }

}
