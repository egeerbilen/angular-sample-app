import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuardService } from './auth-guard/can-deactivate-guard.service';
import { CanDeactivateComponent } from './can-deactivate.component';

const routes: Routes = [
  {
    path: 'canDeactivate',
    component: CanDeactivateComponent,
    title: 'Can Deactivate',
    canDeactivate: [CanDeactivateGuardService] // CanDeactivateGuardService içindeki -> canDeactivate() mden gelen değer buraya gelir
  }
];

export const canDeactivateRoutes = RouterModule.forChild(routes);
