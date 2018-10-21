import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);
