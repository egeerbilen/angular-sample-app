import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';

@NgModule({
  imports: [homeRoutes, CommonModule, HighlightModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
