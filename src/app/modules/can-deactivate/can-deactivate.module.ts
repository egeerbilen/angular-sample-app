import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CanDeactivateComponent } from './can-deactivate.component';
import { canDeactivateRoutes } from './can-deactivate.routing';

@NgModule({
  imports: [canDeactivateRoutes, CommonModule],
  declarations: [CanDeactivateComponent]
})
export class CanDeactivateModule {}
