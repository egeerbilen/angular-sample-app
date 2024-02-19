import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from './not-found-page.component';
import { notFoundPageRoutes } from './not-found-page.routing';

@NgModule({
  imports: [notFoundPageRoutes, CommonModule],
  declarations: [NotFoundPageComponent]
})
export class NotFoundPageModule {}
