import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { httpInterceptorProvider, jwtModule } from 'src/app/shared/modules/jwt-token-module-settings';

import { HttpRequestComponent } from './http-request.component';
import { httpRequestRoutes } from './http-request.routing';

@NgModule({
  imports: [httpRequestRoutes, CommonModule, HttpClientModule, jwtModule],
  declarations: [HttpRequestComponent],
  providers: [httpInterceptorProvider]
})
export class HttpRequestModule {}
