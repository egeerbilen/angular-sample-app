import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CacheManagementComponent } from './cache-management.component';
import { cacheManagementRoutes } from './cache-management.routing';

@NgModule({
  imports: [cacheManagementRoutes, CommonModule],
  declarations: [CacheManagementComponent]
})
export class CacheManagementModule {}
