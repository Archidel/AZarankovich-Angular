import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from '../../../interfaces/ICourse';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../../common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass']
})
export class CourseItemComponent implements OnInit {

  @Input() public course: ICourse;
  @Output() public onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {
  }

  public ngOnInit(): void {
  }

  public delete(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you really want to delete this course?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDelete.emit(this.course.id);
      }
    });
  }

}
