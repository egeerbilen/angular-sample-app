import { RouterModule, Routes } from '@angular/router';

import { PipesComponent } from './pipes.component';

const routes: Routes = [
  {
    path: 'pipes',
    component: PipesComponent,
    title: 'Pipes'
  }
];

export const pipesRoutes = RouterModule.forChild(routes);
