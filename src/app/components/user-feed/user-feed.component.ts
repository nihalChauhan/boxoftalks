import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/IArticle';
import { IPagination } from 'src/app/models/IPagination';
import { UserFeedService } from './user-feed.service';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  loggedIn: boolean;
  articles: IArticle[];
  pagination: IPagination;

  constructor(private api: UserFeedService, private userService: UserService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
    this.pagination = new IPagination();
    this.pagination.currentPage = 1;
  }
  ngOnInit() {
    this.api.getUserFeed().subscribe(data => {
      this.articles = data['articles'];
      this.pagination.totalPages = Number(data['articlesCount']) / environment.pageSize;
    });
  }

  changePage(targetPage: number) {
    this.pagination.currentPage = targetPage;
    this.api.getUserFeed(targetPage).subscribe(data => {
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
