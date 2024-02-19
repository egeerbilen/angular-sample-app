import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormComponent } from './reactive-form.component';

const routes: Routes = [
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent,
    title: 'Reactive Form'
  }
];

export const reactiveFormRoutes = RouterModule.forChild(routes);
