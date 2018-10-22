import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from 'src/app/models/IArticle';
import { IPagination } from 'src/app/models/IPagination';
import { UserService } from 'src/app/services/user.service';
import { TagFeedService } from './tag-feed.service';
import { environment } from '../../../environments/environment';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.css']
})
export class TagFeedComponent implements OnInit {
  loggedIn: boolean;
  tagName: string;
  articles: IArticle[];
  pagination: IPagination;
  constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UserService, private api: TagFeedService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(p => {
      this.tagName = p.val;
      this.articles = undefined;
      this.pagination = new IPagination();
      this.pagination.currentPage = 1;
      this.api.getTagFeed(this.tagName).subscribe(data => {
        this.articles = data['articles'];
        this.pagination.totalPages = Number(data['articlesCount']) / environment.pageSize;
        console.log(this.pagination.totalPages);
      });
    });
  }

  isValid() {
    if (this.pagination.totalPages <= 1) {
      return false;
    }
    return true;
  }
}
