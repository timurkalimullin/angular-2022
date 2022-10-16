/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userNameSource = new BehaviorSubject<string | null>(null);

  userName$ = this.userNameSource.asObservable();

  userToken: string | null = null;

  logIn(name: string) {
    const userToken = window.crypto.randomUUID();
    this.userToken = userToken;
    localStorage.setItem('userToken', userToken);
    localStorage.setItem('userName', name);
    this.userToken = userToken;
    this.userNameSource.next(name);
  }

  logOut() {
    this.userToken = null;
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
  }

  getUserInfo() {
    const userName = localStorage.getItem('userName');
    const userToken = localStorage.getItem('userToken');

    return { userName, userToken };
  }
}
