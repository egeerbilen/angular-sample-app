import { RouterModule, Routes } from '@angular/router';

import { NgStyleComponent } from './ng-style.component';

const routes: Routes = [
  {
    path: 'ngStyle',
    component: NgStyleComponent,
    title: 'Ng Style'
  }
];

export const ngStyleRoutes = RouterModule.forChild(routes);
