import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

export const passwordValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const { value } = control;
  const required = value !== null && value !== undefined && value?.length;
  const valLength = value.length > 8;
  const register = /(?=.*[a-z])(?=.*[A-Z])/.test(value);
  const mixChars = /(?=.*\d)(?=.*\w)/.test(value);
  const special = /[!@#?\]]/.test(value);

  if (!required || !valLength || !register || !mixChars || !special) {
    return { required, valLength, register, mixChars, special };
  }
  return null;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  messages = {
    login: {
      required: 'Please enter a login email',
      email: 'The login email is invalid',
    },
    password: {
      required: 'please enter a password',
      valLength: 'at least 8 characters',
      mixChars: 'a mixture of letters and numbers',
      register: 'a mixture of both uppercase and lowercase letters',
      special: 'inclusion of at least one special character, e.g., ! @ # ? ]',
    },
  };

  loginForm = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', [passwordValidator]),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  getControl(controlName: string) {
    return this.loginForm.get(controlName);
  }

  getPasswordErrorMessage() {
    let message = 'Your password isn`t strong enough\n';

    const err = this.getControl('password')?.errors;

    const base = this.messages.password;

    if (err) {
      Object.keys(err).forEach(key => {
        // @ts-ignore
        if (!err[key]) message += `${base[key]}\n`;
      });
    }

    return message;
  }

  submit(e: SubmitEvent) {
    e.preventDefault();
    if (this.loginForm.valid) {
      this.loginService.logIn(this.getControl('login')?.value);
    }
  }
}
