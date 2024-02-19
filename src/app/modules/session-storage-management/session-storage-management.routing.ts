import { RouterModule, Routes } from '@angular/router';

import { SessionStorageManagementComponent } from './session-storage-management.component';

const routes: Routes = [
  {
    path: 'sessionStorageManagement',
    component: SessionStorageManagementComponent,
    title: 'Session Storage Management'
  }
];

export const sessionStorageManagementRoutes = RouterModule.forChild(routes);
