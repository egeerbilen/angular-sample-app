import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PassingStaticDataToRouteComponent } from './passing-static-data-to-route.component';
import { passingStaticDataToRouteRoutes } from './passing-static-data-to-route.routing';

@NgModule({
  imports: [passingStaticDataToRouteRoutes, CommonModule],
  declarations: [PassingStaticDataToRouteComponent]
})
export class PassingStaticDataToRouteModule {}
