import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { AddArticleComponent } from './components/add-article/add-article.component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: '', component: GlobalFeedComponent},
            {path: 'tag', component: TagFeedComponent},
            {path: 'feed', component: UserFeedComponent}
        ]
    },
    { path: 'article', component: ArticleComponent },
    { path: 'new', component: AddArticleComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home' }
];

export const routes = RouterModule.forRoot(appRoutes);
