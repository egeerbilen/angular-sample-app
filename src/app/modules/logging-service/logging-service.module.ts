import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoggingServiceComponent } from './logging-service.component';
import { loggingServiceRoutes } from './logging-service.routing';

@NgModule({
  imports: [loggingServiceRoutes, CommonModule],
  declarations: [LoggingServiceComponent]
})
export class LoggingServiceModule {}
