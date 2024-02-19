import { RouterModule, Routes } from '@angular/router';

import { HttpRequestComponent } from './http-request.component';

const routes: Routes = [
  {
    path: 'httpRequest',
    component: HttpRequestComponent,
    title: 'Http Request'
  }
];

export const httpRequestRoutes = RouterModule.forChild(routes);
