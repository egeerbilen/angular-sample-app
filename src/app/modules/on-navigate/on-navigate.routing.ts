import { RouterModule, Routes } from '@angular/router';

import { OnNavigateComponent } from './on-navigate.component';

const routes: Routes = [
  {
    path: 'onNavigate',
    component: OnNavigateComponent,
    title: 'OnNavigate'
  }
];

export const onNavigateRoutes = RouterModule.forChild(routes);
