import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgStyleComponent } from './ng-style.component';
import { ngStyleRoutes } from './ng-style.routing';

@NgModule({
  imports: [ngStyleRoutes, CommonModule],
  declarations: [NgStyleComponent]
})
export class NgStyleModule {}
