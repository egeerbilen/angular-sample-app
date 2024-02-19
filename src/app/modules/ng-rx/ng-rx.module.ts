import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgRxComponent } from './ng-rx.component';
import { ngRxRoutes } from './ng-rx.routing';
import { storeModules } from './redux/reducers';

@NgModule({
  imports: [ngRxRoutes, CommonModule, storeModules],
  declarations: [NgRxComponent]
})
export class NgRxModule {}
