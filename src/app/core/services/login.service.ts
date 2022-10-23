/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userNameSource = new BehaviorSubject<string | null>(null);

  userName$ = this.userNameSource.asObservable();

  userToken: string | null = null;

  constructor(private router: Router) {}

  logIn(name: string) {
    console.log({ name });
    const userToken = window.crypto.randomUUID();
    this.userToken = userToken;
    localStorage.setItem('userToken', userToken);
    localStorage.setItem('userName', name);
    this.userToken = userToken;
    this.userNameSource.next(name);
    this.router.navigate(['/']);
  }

  logOut() {
    this.userToken = null;
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
    this.userNameSource.next(null);
  }

  getUserInfo() {
    const userName = localStorage.getItem('userName');
    const userToken = localStorage.getItem('userToken');

    return { userName, userToken };
  }

  checkAuth() {
    return !!this.getUserInfo().userName;
  }
}
