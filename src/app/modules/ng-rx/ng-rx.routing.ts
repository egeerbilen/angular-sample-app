import { RouterModule, Routes } from '@angular/router';

import { NgRxComponent } from './ng-rx.component';

const routes: Routes = [
  {
    path: 'ngRx',
    component: NgRxComponent,
    title: 'ngRx'
  }
];

export const ngRxRoutes = RouterModule.forChild(routes);
