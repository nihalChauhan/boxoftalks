import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/app/models/IArticle';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: IArticle;

  constructor() { }

  ngOnInit() {
  }

}
