import { RouterModule, Routes } from '@angular/router';

import { ParentToChildComponent } from './parent-to-child.component';

const routes: Routes = [
  {
    path: 'parentToChild',
    component: ParentToChildComponent,
    title: 'Parent To Child'
    // pathMatch: 'full'
    // pathMatch: 'full' seçeneği, Angular'ın yönlendiricisinde kullanılan bir yapılandırma seçeneğidir.
    //  Bu seçenek, belirli bir rotanın yolunu tanımlarken, geçerli URL'nin rotanın belirlediği yola ne şekilde eşleşeceğini belirtir.
  }
];

export const parentToChildRoutes = RouterModule.forChild(routes);
