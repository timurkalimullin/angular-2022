import { Component } from '@angular/core';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: string = '';

  constructor(private loginService: LoginService) {}

  submit(e: SubmitEvent) {
    e.preventDefault();
    this.loginService.logIn(this.login);
  }
}
