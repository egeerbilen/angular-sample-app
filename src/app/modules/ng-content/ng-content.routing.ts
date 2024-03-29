import { RouterModule, Routes } from '@angular/router';

import { NgContentComponent } from './ng-content.component';

const routes: Routes = [
  {
    path: 'ngContent',
    component: NgContentComponent,
    title: 'Ng Content'
  }
];

export const ngContentRoutes = RouterModule.forChild(routes);
