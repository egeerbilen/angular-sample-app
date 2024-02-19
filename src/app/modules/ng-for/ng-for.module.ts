import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgForComponent } from './ng-for.component';
import { ngForRoutes } from './ng-for.routing';

@NgModule({
  imports: [ngForRoutes, CommonModule],
  declarations: [NgForComponent]
})
export class NgForModule {}
