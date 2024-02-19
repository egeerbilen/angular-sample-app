import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgIfComponent } from './ng-if.component';
import { ngIfRoutes } from './ng-if.routing';

@NgModule({
  imports: [ngIfRoutes, CommonModule, FormsModule],
  declarations: [NgIfComponent]
})
export class NgIfModule {}
