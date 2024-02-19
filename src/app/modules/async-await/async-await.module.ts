import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AsyncAwaitComponent } from './async-await.component';
import { asyncAwaitRoutes } from './async-await.routing';

@NgModule({
  imports: [asyncAwaitRoutes, CommonModule],
  declarations: [AsyncAwaitComponent]
})
export class AsyncAwaitModule {}
