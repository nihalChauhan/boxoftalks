import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {
  constructor(private http: HttpClient) { }

  public getArticle(slug: string) {
    return this.http.get(environment.apiUrl + '/articles/' + slug);
  }

  public updateArticle(title: string, description: string, body: string, slug: string) {
    const articleUpdateObject = Object.assign({}, {article: {title, description, body}});
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;

    return this.http.put(environment.apiUrl + '/articles/' + slug, articleUpdateObject,  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }
}
