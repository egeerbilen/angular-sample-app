import { RouterModule, Routes } from '@angular/router';

import { ObservablesComponent } from './observables.component';

const routes: Routes = [
  {
    path: 'observables',
    component: ObservablesComponent,
    title: 'Observables'
  }
];

export const observablesRoutes = RouterModule.forChild(routes);
