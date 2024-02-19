import { RouterModule, Routes } from '@angular/router';

import { DirectiveComponent } from './directive.component';

const routes: Routes = [
  {
    path: 'directive',
    component: DirectiveComponent,
    title: 'Directive'
  }
];

export const directiveRoutes = RouterModule.forChild(routes);
