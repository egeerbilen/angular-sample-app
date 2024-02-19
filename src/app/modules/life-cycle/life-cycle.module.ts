import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LifeCycleComponent } from './life-cycle.component';
import { lifeCycleRoutes } from './life-cycle.routing';
import { NgAfterContentCheckedComponent } from './ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterContentInitComponent } from './ng-after-content-init/ng-after-content-init.component';
import { NgAfterContentInitChildComponent } from './ng-after-content-init/ng-after-content-init-child/ng-after-content-init-child.component';
import { NgAfterViewCheckedComponent } from './ng-after-view-checked/ng-after-view-checked.component';
import { NgAfterViewInitComponent } from './ng-after-view-init/ng-after-view-init.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgOnChangesChildComponent } from './ng-on-changes/ng-on-changes-child/ng-on-changes-child.component';
import { NgOnDestroyComponent } from './ng-on-destroy/ng-on-destroy.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';

@NgModule({
  imports: [lifeCycleRoutes, AppRoutingModule, CommonModule, FormsModule, BrowserModule, BrowserAnimationsModule, LayoutModule],
  declarations: [
    LifeCycleComponent,
    NgAfterContentCheckedComponent,
    NgAfterContentInitComponent,
    NgAfterViewCheckedComponent,
    NgAfterViewInitComponent,
    NgDoCheckComponent,
    NgOnChangesComponent,
    NgOnDestroyComponent,
    NgOnInitComponent,
    NgOnChangesChildComponent,
    NgAfterContentInitChildComponent
  ]
})
export class LifeCycleModule {}
