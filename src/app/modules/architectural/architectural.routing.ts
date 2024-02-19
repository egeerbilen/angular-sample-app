import { RouterModule, Routes } from '@angular/router';

import { ArchitecturalComponent } from './architectural.component';

const routes: Routes = [
  {
    path: 'architectural',
    component: ArchitecturalComponent,
    title: 'Architectural'
  }
];

export const architecturalRoutes = RouterModule.forChild(routes);
