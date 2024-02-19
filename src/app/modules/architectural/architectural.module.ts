import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArchitecturalComponent } from './architectural.component';
import { architecturalRoutes } from './architectural.routing';

@NgModule({
  imports: [architecturalRoutes, CommonModule],
  declarations: [ArchitecturalComponent]
})
export class ArchitecturalModule {}
