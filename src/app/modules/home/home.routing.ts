import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Index Page'
    // Lazy load
    // loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule) bunu component: HomeComponent, bunu yerine yaza bilirsin
  }
];

export const homeRoutes = RouterModule.forChild(routes);
