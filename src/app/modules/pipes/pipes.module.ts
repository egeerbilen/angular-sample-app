import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from './pipe/filter.pipe';
import { StringTransformPipe } from './pipe/string-transform.pipe';
import { PipesComponent } from './pipes.component';
import { pipesRoutes } from './pipes.routing';

@NgModule({
  imports: [pipesRoutes, CommonModule, FormsModule],
  declarations: [PipesComponent, StringTransformPipe, FilterPipe]
})
export class PipesModule {}
