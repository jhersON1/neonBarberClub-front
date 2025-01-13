import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: () => {
            return 'home';
        }
    },
    {
        path: 'home',
        loadComponent: () => import('./layout/homepage/homepage.component'),
    }
];
