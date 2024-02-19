import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CanActiveComponent } from './can-active.component';
import { canActiveRoutes } from './can-active.routing';
import { CanActiveChildComponent } from './can-active-child/can-active-child.component';

@NgModule({
  imports: [canActiveRoutes, CommonModule, AppRoutingModule],
  declarations: [CanActiveComponent, CanActiveChildComponent]
})
export class CanActiveModule {}
