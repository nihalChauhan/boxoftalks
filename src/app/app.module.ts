import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TrendingTagsComponent } from './components/trending-tags/trending-tags.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TrendingTagsComponent,
    ArticleComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
