import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedInObservable = this.loggedIn.asObservable();
  constructor(private http: HttpClient) { }

  registerUser(username: string, email: string, password: string) {
    const userObject = Object.assign({}, {
      user: {
        username,
        email,
        password
      }});
    return this.http.post(environment.apiUrl + '/users', userObject);
  }

  saveUser(userContainer: any) {
    const stateUser = userContainer['user'];
    localStorage.setItem('user', stateUser);
    this.loggedIn.next(true);
  }

  loginUser(email: string, password: string) {
    const userLoginObject = Object.assign({}, {
      user: {
        email,
        password
      }});
    return this.http.post(environment.apiUrl + '/users/login', userLoginObject);
  }

  logoutUser() {
    localStorage.clear();
    this.loggedIn.next(false);
  }
}
