import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OnNavigateComponent } from './on-navigate.component';
import { onNavigateRoutes } from './on-navigate.routing';

@NgModule({
  //HTML de a link kullanmak için RouterModule modülü importa ekle
  imports: [onNavigateRoutes, RouterModule.forRoot([]), CommonModule],
  declarations: [OnNavigateComponent]
})
export class OnNavigateModule {}
