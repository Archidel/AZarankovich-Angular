import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoursesComponent} from './core/courses/courses.component';
import {LoginComponent} from './core/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
