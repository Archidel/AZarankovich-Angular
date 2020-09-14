import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SectionComponent } from './section/section.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { LogoComponent } from './header/logo/logo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShadowDirective} from './directive/shadow.directive';
import {DurationPipe} from './pipe/duration.pipe';
import {SortByDatePipe} from './pipe/sortByDate.pipe';
import {SearchPipe} from './pipe/search.pipe';
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from '../app-routing.module';
import {NgbAlertModule, NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HeaderComponent, BreadcrumbComponent, SectionComponent, CoursesComponent, FooterComponent, CourseItemComponent, LogoComponent, ShadowDirective, DurationPipe, SortByDatePipe, SearchPipe, ConfirmationDialogComponent, LoginComponent],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    SectionComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbButtonsModule,
    NgbAlertModule,
    MatRadioModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule { }
