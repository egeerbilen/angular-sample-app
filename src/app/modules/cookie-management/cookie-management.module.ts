import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CookieManagementComponent } from './cookie-management.component';
import { cookieManagementRoutes } from './cookie-management.routing';

@NgModule({
  imports: [cookieManagementRoutes, CommonModule],
  declarations: [CookieManagementComponent]
})
export class CookiesManagementModule {}
