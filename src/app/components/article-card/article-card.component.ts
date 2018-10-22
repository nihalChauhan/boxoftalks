import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/app/models/IArticle';
import { IFav } from 'src/app/models/IFav';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: IArticle;
  fav: IFav;
  constructor() {
    this.fav = new IFav();
  }

  ngOnInit() {
    if (this.article) {
      this.fav.favCount = this.article.favoritesCount;
      this.fav.favSwitch = this.article.favorited;
      this.fav.slug = this.article.slug;
    }
  }

}
