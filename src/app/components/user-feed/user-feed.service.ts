import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserFeedService {
  constructor(private http: HttpClient) { }

  public getUserFeed(pageNumber: number = 1) {
    const offset = (pageNumber - 1) * environment.pageSize;
    const params = new HttpParams().set('offset', String(offset)).append('limit', String(environment.pageSize));
    return this.http.get(environment.apiUrl + '/articles/feed', {params: params});
  }
}
