import { RouterModule, Routes } from '@angular/router';

import { CookieManagementComponent } from './cookie-management.component';

const routes: Routes = [
  {
    path: 'cookieManagement',
    component: CookieManagementComponent,
    title: 'Cookie Management'
  }
];

export const cookieManagementRoutes = RouterModule.forChild(routes);
