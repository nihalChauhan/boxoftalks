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

  public deleteArticle(slug: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    return this.http.delete(environment.apiUrl + '/articles/' + slug, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }

  public getComments(slug: string) {
    return this.http.get(environment.apiUrl + '/articles/' + slug + '/comments');
  }

  public deleteComment(slug: string, id: number) {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    return this.http.delete(environment.apiUrl + `/articles/${slug}/comments/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  }
}
