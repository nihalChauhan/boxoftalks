import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/IArticle';
import { ArticleService } from './article.service';
import { ActivatedRoute, Params} from '@angular/router';
import { IComment } from 'src/app/models/IComment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: IArticle;
  comments: IComment[];
  constructor(private api: ArticleService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: Params) => {
      this.api.getArticle(this.route.snapshot.queryParams['slug']).subscribe(data => {
        this.article = data['article'];
        this.api.getComments(this.route.snapshot.queryParams['slug']).subscribe(commentsData => {
          this.comments = commentsData['comments'];
        });
      });
    });
  }

  commentUpdate(event: any) {
    this.api.getComments(this.route.snapshot.queryParams['slug']).subscribe(commentsData => {
      this.comments = commentsData['comments'];
    });
  }

  commentDelete(event: any) {
    this.api.deleteComment(this.route.snapshot.queryParams['slug'], event).subscribe();
    this.comments.splice( this.comments.indexOf(this.comments.find(c => c.id === event)), 1 );
  }
}
