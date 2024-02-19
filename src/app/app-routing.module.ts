import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Tüm routerlar alt modüllerde ki routing.ts lerden geliyor
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })], useHash, Angular uygulamalarında URL yönetimini etkileyen bir ayar seçeneğidir.
  exports: [RouterModule]
})
export class AppRoutingModule {}
