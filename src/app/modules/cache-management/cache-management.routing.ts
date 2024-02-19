import { RouterModule, Routes } from '@angular/router';

import { CacheManagementComponent } from './cache-management.component';

const routes: Routes = [
  {
    path: 'cacheManagement',
    component: CacheManagementComponent,
    title: 'Cache Management'
  }
];

export const cacheManagementRoutes = RouterModule.forChild(routes);
