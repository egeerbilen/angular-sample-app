import { RouterModule, Routes } from '@angular/router';

import { AsyncAwaitComponent } from './async-await.component';

const routes: Routes = [
  {
    path: 'asyncAwait',
    component: AsyncAwaitComponent,
    title: 'Async Await'
  }
];

export const asyncAwaitRoutes = RouterModule.forChild(routes);
