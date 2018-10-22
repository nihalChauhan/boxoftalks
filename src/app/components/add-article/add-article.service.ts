import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddArticleService {
  constructor(private http: HttpClient) { }
  addArticle(title: string, description: string, body: string, tags: string) {
    const tagList = tags.split(' ');
    const articleObject = Object.assign({}, {
      article: {
        title,
        description,
        body,
        tagList
      }});
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    return this.http.post(environment.apiUrl + '/articles', articleObject, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
   });
  }
}
