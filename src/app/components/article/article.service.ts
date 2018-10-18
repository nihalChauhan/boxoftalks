import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  public getArticle(slug: string) {
    return this.http.get(environment.apiUrl + '/articles/' + slug);
  }

  public getComments(slug: string) {
    return this.http.get(environment.apiUrl + '/articles/' + slug + '/comments');
  }
}
