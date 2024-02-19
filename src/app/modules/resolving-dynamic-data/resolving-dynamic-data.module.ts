import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResolvingDynamicDataComponent } from './resolving-dynamic-data.component';
import { resolvingDynamicDataRoutes } from './resolving-dynamic-data.routing';

@NgModule({
  imports: [resolvingDynamicDataRoutes, CommonModule],
  declarations: [ResolvingDynamicDataComponent]
})
export class ResolvingDynamicDataModule {}
