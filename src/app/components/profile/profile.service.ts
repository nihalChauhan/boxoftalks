import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  getProfile(username: string) {
    return this.http.get(environment.apiUrl + '/profiles/' + username);
  }

  getProfileFeed(username: string, pageNumber: number = 1) {
    const offset = (pageNumber - 1) * environment.pageSize;
    const params = new HttpParams().set('offset', String(offset))
      .append('limit', String(environment.pageSize))
      .append('author', username);
    return this.http.get(environment.apiUrl + '/articles/', {params: params});
  }

  follow(username: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    return this.http.post(environment.apiUrl + '/profiles/' + username + '/follow', {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }

  unfollow(username: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    return this.http.delete(environment.apiUrl + '/profiles/' + username + '/follow', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }
}
