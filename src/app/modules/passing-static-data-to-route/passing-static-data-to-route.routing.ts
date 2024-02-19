import { RouterModule, Routes } from '@angular/router';

import { PassingStaticDataToRouteComponent } from './passing-static-data-to-route.component';

const routes: Routes = [
  {
    path: 'passingStaticDataToRouteComponent',
    component: PassingStaticDataToRouteComponent,
    title: 'Passing Static Data To Route Component',

    /* Route konfigürasyonu nesnesindeki `data` özelliği, rota bileşenine ek statik veri iletmek için
    kullanılır. Bu durumda, `data` özelliği iki anahtar-değer çiftine sahip bir nesnedir:
    `title` ve `description`. Bu statik verilere rota bileşeni içinde erişilebilir ve sağlanan
    verilere dayalı olarak bilgi görüntülemek veya gerekli mantığı gerçekleştirmek için kullanılabilir. */
    data: { title: 'Passing Static Data receipt "title"', description: 'Passing Static Data receipt "description"' }
  }
];

export const passingStaticDataToRouteRoutes = RouterModule.forChild(routes);
