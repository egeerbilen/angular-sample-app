import { RouterModule, Routes } from '@angular/router';

import { LoggingServiceComponent } from './logging-service.component';

const routes: Routes = [
  {
    path: 'loggingService',
    component: LoggingServiceComponent,
    title: 'Logging Service'
  }
];

export const loggingServiceRoutes = RouterModule.forChild(routes);
