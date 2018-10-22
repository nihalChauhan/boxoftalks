import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagFeedService {
  constructor(private http: HttpClient) { }

  public getTagFeed(tagName: string, pageNumber: number = 1) {
    const offset = (pageNumber - 1) * environment.pageSize;
    const params = new HttpParams().set('offset', String(offset))
      .append('limit', String(environment.pageSize))
      .append('tag', tagName);
    return this.http.get(environment.apiUrl + '/articles', {params: params});
  }
}
