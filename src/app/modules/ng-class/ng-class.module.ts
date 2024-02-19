import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgClassComponent } from './ng-class.component';
import { ngClassRoutes } from './ng-class.routing';

@NgModule({
  imports: [ngClassRoutes, CommonModule],
  declarations: [NgClassComponent]
})
export class NgClassModule {}
