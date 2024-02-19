import { RouterModule, Routes } from '@angular/router';

import { LocalStorageManagementComponent } from './local-storage-management.component';

const routes: Routes = [
  {
    path: 'localStorageManagement',
    component: LocalStorageManagementComponent,
    title: 'Local Storage Management'
  }
];

export const localStorageManagementRoutes = RouterModule.forChild(routes);
