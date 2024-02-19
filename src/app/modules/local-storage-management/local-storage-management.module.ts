import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocalStorageManagementComponent } from './local-storage-management.component';
import { localStorageManagementRoutes } from './local-storage-management.routing';

@NgModule({
  imports: [localStorageManagementRoutes, CommonModule],
  declarations: [LocalStorageManagementComponent]
})
export class LocalStorageManagementModule {}
