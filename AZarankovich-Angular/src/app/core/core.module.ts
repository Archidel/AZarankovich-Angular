import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SectionComponent } from './section/section.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { LogoComponent } from './header/logo/logo.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HeaderComponent, BreadcrumbComponent, SectionComponent, CoursesComponent, FooterComponent, CourseItemComponent, LogoComponent],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    SectionComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule { }
