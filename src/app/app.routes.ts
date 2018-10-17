import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);
