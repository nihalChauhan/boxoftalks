import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TrendingTagsComponent } from './components/trending-tags/trending-tags.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CommentComponent } from './components/comment/comment.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { TagComponent } from './components/tag/tag.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TrendingTagsComponent,
    ArticleComponent,
    ArticleCardComponent,
    GlobalFeedComponent,
    PaginatorComponent,
    CommentComponent,
    SignupComponent,
    LoginComponent,
    TagFeedComponent,
    UserFeedComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    JwtInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
