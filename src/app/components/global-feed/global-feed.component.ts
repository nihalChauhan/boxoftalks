import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/IArticle';
import { GlobalFeedService } from './global-feed.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {

  articles: IArticle[];

  constructor(private api: GlobalFeedService) { }

  ngOnInit() {
    this.api.getGlobalFeed(1).subscribe(data => this.articles = data['articles']);
  }

}
