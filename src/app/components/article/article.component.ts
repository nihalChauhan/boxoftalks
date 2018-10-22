import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/IArticle';
import { ArticleService } from './article.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { IComment } from 'src/app/models/IComment';
import { UserService } from '../../services/user.service';
import { IFav } from 'src/app/models/IFav';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  loggedIn: boolean;
  username: string;
  article: IArticle;
  fav: IFav;
  comments: IComment[];
  constructor(private api: ArticleService,  private router: Router, private route: ActivatedRoute, private userService: UserService) {
    userService.loggedInObservable.subscribe(res => {
      this.fav = new IFav();
      this.loggedIn = res;
      if (this.loggedIn) {
        this.username = JSON.parse(localStorage.getItem('user')).username;
      }
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe((params: Params) => {
      this.api.getArticle(this.route.snapshot.queryParams['slug']).subscribe(data => {
        this.article = data['article'];
        this.fav.favCount = this.article.favoritesCount;
        this.fav.favSwitch = this.article.favorited;
        this.fav.slug = this.article.slug;
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

  articleDeleteEvent() {
    this.api.deleteArticle(this.route.snapshot.queryParams['slug']).subscribe(
      data => this.router.navigate(['/'])
    );
  }
}
