import { RouterModule, Routes } from '@angular/router';

import { DataResolverServiceService } from './data-resolver/data-resolver-service.service';
import { ResolvingDynamicDataComponent } from './resolving-dynamic-data.component';

const routes: Routes = [
  {
    path: 'resolvingDynamicDataComponent',
    component: ResolvingDynamicDataComponent,
    title: 'Resolving Dynamic Data Component',
    resolve: { resolvedData: DataResolverServiceService } // DataResolverServiceService bu servis içindeki -> resolve functionunu çaığrır
    // * Not: sol tarafta belirttiğin yer sağ tarafta belirttiğin servisin içindeki metodu çağırır (resolve metodunu)
    // * component de veriye erişmek için resolvedData yı kullanırsın
  }
];

export const resolvingDynamicDataRoutes = RouterModule.forChild(routes);
