import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding.component';

const routes: Routes = [
  {
    path: 'twoWayBinding',
    component: TwoWayBindingComponent,
    title: 'Two Way Binding'
  }
];

export const twoWayBindingRoutes = RouterModule.forChild(routes);
