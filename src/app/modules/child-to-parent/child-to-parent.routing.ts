import { RouterModule, Routes } from '@angular/router';

import { ChildToParentComponent } from './child-to-parent.component';

const routes: Routes = [
  {
    path: 'childToParent',
    component: ChildToParentComponent,
    title: 'Child To Parent'
  }
];

export const childToParentRoutes = RouterModule.forChild(routes);
