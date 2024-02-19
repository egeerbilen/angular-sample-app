import { RouterModule, Routes } from '@angular/router';

import { NgClassComponent } from './ng-class.component';

const routes: Routes = [
  {
    path: 'ngClass',
    component: NgClassComponent,
    title: 'Ng Class'
  }
];

export const ngClassRoutes = RouterModule.forChild(routes);
