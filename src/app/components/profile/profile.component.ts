import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { IAuthor } from 'src/app/models/IAuthor';
import { ProfileService } from './profile.service';
import { IArticle } from 'src/app/models/IArticle';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  profile: IAuthor;
  articles: IArticle[];
  loggedIn: boolean;
  followState: string;
  canFollow: boolean;
  constructor(private route: ActivatedRoute, private api: ProfileService, private userService: UserService) {
    userService.loggedInObservable.subscribe(res => this.loggedIn = res);
    if (this.loggedIn) {
      this.canFollow = JSON.parse(localStorage.getItem('user')).username === this.username ? false : true;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.username = this.route.snapshot.queryParams['username'];
        this.api.getProfile(this.username).subscribe(data => {
          this.profile = data['profile'];
          this.followState = this.profile.following ? 'Unfollow' : 'Follow';
          this.api.getProfileFeed(this.username).subscribe(articles => {
            this.articles = articles['articles'];
          });
        });
    });
  }

  changePage(targetPage: number) {
    this.api.getProfileFeed(this.username, targetPage).subscribe(data => {
      this.articles = data['articles'];
      const feed = document.getElementById('feed');
      feed.scrollIntoView();
    });
  }

  followToggle() {
    if (this.followState === 'Follow') {
      this.api.follow(this.username).subscribe(data => this.followState = 'Unfollow');
    } else {
      this.api.unfollow(this.username).subscribe(data => this.followState = 'Follow');
    }
  }
}
