import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'article', component: ArticleComponent },
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);
