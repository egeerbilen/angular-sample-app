import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ObservablesComponent } from './observables.component';
import { observablesRoutes } from './observables.routing';

@NgModule({
  imports: [observablesRoutes, CommonModule],
  declarations: [ObservablesComponent]
})
export class ObservablesModule {}
