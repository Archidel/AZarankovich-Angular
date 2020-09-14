import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorizationService} from '../service/authorization.service';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
  }

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  public onSubmit(): void {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    const user = this.authorizationService.login(email, password);

    if (user) {
      console.log(user);
      localStorage.setItem('isLogged', 'true');
      console.log('logged in successfully');
    }


    this.router.navigate(['/course']);
  }
}
