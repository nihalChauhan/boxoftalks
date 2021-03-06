import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/IArticle';
import { IPagination } from 'src/app/models/IPagination';
import { GlobalFeedService } from './global-feed.service';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {

  loggedIn: boolean;
  articles: IArticle[];
  pagination: IPagination;

  constructor(private api: GlobalFeedService, private userService: UserService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
    this.pagination = new IPagination();
    this.pagination.currentPage = 1;
  }

  ngOnInit() {
    this.api.getGlobalFeed().subscribe(data => {
      this.articles = data['articles'];
      this.pagination.totalPages = Number(data['articlesCount']) / environment.pageSize;
    });
  }

  changePage(targetPage: number) {
    this.pagination.currentPage = targetPage;
    this.api.getGlobalFeed(targetPage).subscribe(data => {
      this.articles = data['articles'];
      this.pagination.totalPages = Number(data['articlesCount']) / environment.pageSize;
      const feed = document.getElementById('feed');
      feed.scrollIntoView();
    });
  }

  isValid() {
    if (this.pagination.totalPages <= 1) {
      return false;
    }
    return true;
  }
}
