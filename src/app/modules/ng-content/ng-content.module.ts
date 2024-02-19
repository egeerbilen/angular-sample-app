import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnotherComponentComponent } from './another-component/another-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NgContentComponent } from './ng-content.component';
import { ngContentRoutes } from './ng-content.routing';

@NgModule({
  imports: [ngContentRoutes, CommonModule],
  declarations: [NgContentComponent, MainComponentComponent, AnotherComponentComponent]
})
export class NgContentModule {}
