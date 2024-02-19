import { RouterModule, Routes } from '@angular/router';

import { NgForComponent } from './ng-for.component';

const routes: Routes = [
  {
    path: 'ngFor',
    component: NgForComponent,
    title: 'Ng For'
  }
];

export const ngForRoutes = RouterModule.forChild(routes);
