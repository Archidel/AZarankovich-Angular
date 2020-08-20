import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './core/courses/courses.component';


const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent},
  {path: '**', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
