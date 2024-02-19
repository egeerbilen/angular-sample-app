import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth-guard/auth-guard.service';
import { CanActiveComponent } from './can-active.component';
import { CanActiveChildComponent } from './can-active-child/can-active-child.component';

const routes: Routes = [
  {
    path: 'canActive',
    component: CanActiveComponent,
    title: 'Can Active',
    // canActivate: [AuthGuardService], bunu açtığında parent ve child lerine erişme demek
    canActivateChild: [AuthGuardService], //bunu açınca sadece childlara erişemiyor -> Ayrıca AuthGuardService içindeki canActivateChild metodunu çağırır
    children: [
      {
        path: 'canActiveChild',
        component: CanActiveChildComponent,
        title: 'Can Active Child'
      }
    ]
  }
];

export const canActiveRoutes = RouterModule.forChild(routes);
