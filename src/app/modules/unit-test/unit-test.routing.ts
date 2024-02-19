import { RouterModule, Routes } from '@angular/router';

import { UnitTestComponent } from './unit-test.component';

const routes: Routes = [
  {
    path: 'unitTest',
    component: UnitTestComponent,
    title: 'Unit Test'
  }
];

export const unitTestRoutes = RouterModule.forChild(routes);
