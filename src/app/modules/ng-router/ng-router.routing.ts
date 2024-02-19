import { RouterModule, Routes } from '@angular/router';

import { NgRouterComponent } from './ng-router.component';
import { UrlGetIdComponent } from './url-get-id/url-get-id.component';

const routes: Routes = [
  {
    path: 'ngRouter',
    component: NgRouterComponent,
    title: 'Ng Router'
  },
  {
    path: 'urlGetId/:id/:name',
    component: UrlGetIdComponent,
    title: 'Url Get Id'
  }
];

export const ngRouterRoutes = RouterModule.forChild(routes);
