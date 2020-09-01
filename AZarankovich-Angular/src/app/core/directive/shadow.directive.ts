import {Directive, ElementRef, Input, Renderer2, OnInit} from '@angular/core';
import {ICourse} from '../../interfaces/ICourse';

@Directive({selector: '[appShadow]'})
export class ShadowDirective implements OnInit {
  @Input() public course: ICourse;

  constructor(private elem: ElementRef) {
  }

  public ngOnInit(): void {
    const creationDate = this.course.creationDate;
    const currentDate = new Date();

    if (creationDate < currentDate && creationDate.getDate() >= (currentDate.getDate() + 14)) {
      this.elem.nativeElement.style.border = '2px solid green';
    }

    if (creationDate > currentDate) {
      this.elem.nativeElement.style.border = '2px solid blue';
    }

  }
}
