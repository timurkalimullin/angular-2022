import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  submit(e: SubmitEvent) {
    e.preventDefault();
    this.loginService.logIn(this.login);
  }
}
