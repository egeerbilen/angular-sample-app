import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TwoWayBindingComponent } from './two-way-binding.component';
import { twoWayBindingRoutes } from './two-way-binding.routing';

@NgModule({
  imports: [twoWayBindingRoutes, CommonModule, FormsModule],
  declarations: [TwoWayBindingComponent]
})
export class TwoWayBindingModule {}
