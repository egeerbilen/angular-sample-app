import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { NgRouterComponent } from './ng-router.component';
import { ngRouterRoutes } from './ng-router.routing';

@NgModule({
  //  başka bir alt modül içindeki yönlendirmeleri tanımlarken forChild([]) kullanılır
  imports: [ngRouterRoutes, HighlightModule, CommonModule],
  declarations: [NgRouterComponent]
})
export class NgRouterModule {}
