import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http: HttpClient) { }

  public addFav(slug: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    return this.http.post(environment.apiUrl + `/articles/${slug}/favorite`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }

  public delFav(slug: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    return this.http.delete(environment.apiUrl + `/articles/${slug}/favorite`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }
}
