import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeedService {
  constructor(private http: HttpClient) { }

  public getGlobalFeed(pageNumber: number = 1) {
    const offset = (pageNumber - 1) * environment.pageSize;
    const params = new HttpParams().set('offset', String(offset)).append('limit', String(environment.pageSize));
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = 'Token ' + user.token;
      return this.http.get(environment.apiUrl + '/articles/', {params: params,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      });
    } else {
      return this.http.get(environment.apiUrl + '/articles/', {params: params});
    }
  }
}
