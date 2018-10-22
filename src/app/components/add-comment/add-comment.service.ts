import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ArticleService } from '../article/article.service';

@Injectable({
  providedIn: 'root'
})
export class AddCommentService {

  constructor(private http: HttpClient, private articleService: ArticleService) { }
  postComment(body: string, slug: string) {
    const commentObject = Object.assign({}, {
      comment: {
        body
      }});
    const user = JSON.parse(localStorage.getItem('user'));
    const token = 'Token ' + user.token;
    const res = this.http.post(environment.apiUrl + `/articles/${slug}/comments`, commentObject, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    this.articleService.getComments(slug).subscribe();
    return res;
  }
}
