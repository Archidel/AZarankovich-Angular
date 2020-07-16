import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SectionComponent } from './section/section.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';



@NgModule({
  declarations: [HeaderComponent, BreadcrumbComponent, SectionComponent, CoursesComponent, FooterComponent, CourseItemComponent],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    SectionComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
