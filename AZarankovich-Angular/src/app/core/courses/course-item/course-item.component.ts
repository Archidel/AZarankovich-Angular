import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from "../../../interfaces/ICourse";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass']
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;
  @Output() onDelete: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public delete(): void {
    this.onDelete.emit(this.course.id);
  }
}
