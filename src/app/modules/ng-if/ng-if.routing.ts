import { RouterModule, Routes } from '@angular/router';

import { NgIfComponent } from './ng-if.component';

const routes: Routes = [
  {
    path: 'ngIf',
    component: NgIfComponent,
    title: 'Ng If'
  }
];

export const ngIfRoutes = RouterModule.forChild(routes);
