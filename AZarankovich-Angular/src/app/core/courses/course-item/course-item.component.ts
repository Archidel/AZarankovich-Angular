import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../Entity/Course";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass']
})
export class CourseItemComponent implements OnInit {

  @Input()
  public course: Course;

  constructor() {
  }

  ngOnInit(): void {
  }

}
