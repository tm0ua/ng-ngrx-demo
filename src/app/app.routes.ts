import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // Lazy load the register component.
        path: 'register',
        loadChildren: () => import('./auth/auth.routes').then(m => m.registerRoutes),
    }
];
