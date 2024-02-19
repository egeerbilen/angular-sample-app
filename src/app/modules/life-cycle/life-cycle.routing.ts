import { RouterModule, Routes } from '@angular/router';

import { LifeCycleComponent } from './life-cycle.component';
import { NgAfterContentCheckedComponent } from './ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterContentInitComponent } from './ng-after-content-init/ng-after-content-init.component';
import { NgAfterViewCheckedComponent } from './ng-after-view-checked/ng-after-view-checked.component';
import { NgAfterViewInitComponent } from './ng-after-view-init/ng-after-view-init.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgOnDestroyComponent } from './ng-on-destroy/ng-on-destroy.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';

const routes: Routes = [
  {
    path: 'lifeCycle',
    component: LifeCycleComponent,
    title: 'Life Cycle Component',
    children: [
      {
        path: 'ngAfterContentChecked',
        component: NgAfterContentCheckedComponent,
        title: 'Ng After Content Checked',
        pathMatch: 'full'
      },
      {
        path: 'ngAfterContentInit',
        component: NgAfterContentInitComponent,
        title: 'Ng After Content Init',
        pathMatch: 'full'
      },
      {
        path: 'ngAfterViewChecked',
        component: NgAfterViewCheckedComponent,
        title: 'Ng After View Checked',
        pathMatch: 'full'
      },
      {
        path: 'ngAfterViewInit',
        component: NgAfterViewInitComponent,
        title: 'Ng After View Init',
        pathMatch: 'full'
      },
      {
        path: 'ngDoCheck',
        component: NgDoCheckComponent,
        title: 'Ng Do Check',
        pathMatch: 'full'
      },
      {
        path: 'ngOnChanges',
        component: NgOnChangesComponent,
        title: 'Ng On Changes',
        pathMatch: 'full'
      },
      {
        path: 'ngOnDestroy',
        component: NgOnDestroyComponent,
        title: 'Ng On Destroy',
        pathMatch: 'full'
      },
      {
        path: 'ngOnInit',
        component: NgOnInitComponent,
        title: 'Ng On Init',
        pathMatch: 'full'
      }
    ]
  }
];

export const lifeCycleRoutes = RouterModule.forChild(routes);
