import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SessionStorageManagementComponent } from './session-storage-management.component';
import { sessionStorageManagementRoutes } from './session-storage-management.routing';

@NgModule({
  imports: [sessionStorageManagementRoutes, CommonModule],
  declarations: [SessionStorageManagementComponent]
})
export class SessionStorageManagementModule {}
