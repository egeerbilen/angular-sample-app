import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArchitecturalModule } from './modules/architectural/architectural.module';
import { AsyncAwaitModule } from './modules/async-await/async-await.module';
import { CacheManagementModule } from './modules/cache-management/cache-management.module';
import { CanActiveModule } from './modules/can-active/can-active.module';
import { CanDeactivateModule } from './modules/can-deactivate/can-deactivate.module';
import { ChildToParentModule } from './modules/child-to-parent/child-to-parent.module';
import { CookiesManagementModule } from './modules/cookie-management/cookie-management.module';
import { DesignePatternModule } from './modules/designe-pattern/designe-pattern.module';
import { DirectiveModule } from './modules/directive/directive.module';
import { HomeModule } from './modules/home/home.module';
import { HttpRequestModule } from './modules/http-request/http-request.module';
import { LifeCycleModule } from './modules/life-cycle/life-cycle.module';
import { LocalStorageManagementModule } from './modules/local-storage-management/local-storage-management.module';
import { LoggingServiceModule } from './modules/logging-service/logging-service.module';
import { NgClassModule } from './modules/ng-class/ng-class.module';
import { NgContentModule } from './modules/ng-content/ng-content.module';
import { NgForModule } from './modules/ng-for/ng-for.module';
import { NgIfModule } from './modules/ng-if/ng-if.module';
import { NgRouterModule } from './modules/ng-router/ng-router.module';
import { NgRxModule } from './modules/ng-rx/ng-rx.module';
import { NgStyleModule } from './modules/ng-style/ng-style.module';
import { NotFoundPageModule } from './modules/not-found-page/not-found-page.module';
import { ObservablesModule } from './modules/observables/observables.module';
import { OnNavigateModule } from './modules/on-navigate/on-navigate.module';
import { ParentToChildModule } from './modules/parent-to-child/parent-to-child.module';
import { PassingStaticDataToRouteModule } from './modules/passing-static-data-to-route/passing-static-data-to-route.module';
import { PipesModule } from './modules/pipes/pipes.module';
import { ReactiveFormModule } from './modules/reactive-form/reactive-form.module';
import { ResolvingDynamicDataModule } from './modules/resolving-dynamic-data/resolving-dynamic-data.module';
import { SessionStorageManagementModule } from './modules/session-storage-management/session-storage-management.module';
import { TwoWayBindingModule } from './modules/two-way-binding/two-way-binding.module';
import { UnitTestModule } from './modules/unit-test/unit-test.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    TwoWayBindingModule,
    NgIfModule,
    NgStyleModule,
    NgForModule,
    ParentToChildModule,
    ChildToParentModule,
    NgContentModule,
    LifeCycleModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TreeViewModule,
    OnNavigateModule,
    DirectiveModule,
    LoggingServiceModule,
    NgRouterModule,
    CanActiveModule,
    CanDeactivateModule,
    PassingStaticDataToRouteModule,
    ResolvingDynamicDataModule,
    ObservablesModule,
    NgClassModule,
    ReactiveFormModule,
    PipesModule,
    AsyncAwaitModule,
    HttpRequestModule,
    ArchitecturalModule,
    NgRxModule,
    DesignePatternModule,
    CacheManagementModule,
    CookiesManagementModule,
    LocalStorageManagementModule,
    SessionStorageManagementModule,
    UnitTestModule,
    StoreModule.forRoot({}),
    HighlightModule,
    // ! NotFoundPageModule hep bu sonda olmalıdır
    NotFoundPageModule
    // NotFoundPageModule bu modül içinde NotFoundPageComponent (404) sayfası var. yani RouterModule.forChild(routes) içinden geliyor sona al yoksa diğer child ları ezer ve 404 sayfasını görürsün
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        // Optional: Set the default language to use for code blocks
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          javascript: () => import('highlight.js/lib/languages/javascript'),
          typescript: () => import('highlight.js/lib/languages/typescript')
          // Add other languages as needed
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
// * Declarations (Deklarasyonlar): Bu kısımda bileşenler, direktifler ve borular tanımlanır. Bileşenler, uygulamanın görünür parçalarını oluştururken, direktifler DOM manipülasyonları ve özel davranışlar sağlar. Borular ise veri dönüşümü ve formatlama gibi işlemleri gerçekleştirir.

// * Imports (İçe Aktarmalar): Başka modüllerden veya Angular'ın kütüphanelerinden modüller içe aktarılır. Örneğin, CommonModule genel kullanılan yapıları içerirken, FormsModule form işlemleri için gereken yapıları içerir. Ayrıca, özel oluşturulan modülleri de burada içe aktarabilirsiniz.

// * Providers (Sağlayıcılar): Servisler ve veri sağlayıcıları burada tanımlanır. Bu servisler, uygulama boyunca paylaşılabilir ve Dependency Injection ile bileşenler veya diğer servisler arasında kullanılabilir.

// * Bootstrap (Başlangıç): Genellikle sadece AppModule içinde yer alır ve uygulamanın başlangıç bileşenini belirtir. Tarayıcıda ilk yüklenen ve görüntülenen bileşendir. Bu bileşen, uygulamanızın ana bileşeni olabilir.

// * Exports (Dışa Aktarmalar): Bir modül içinde tanımlanan bileşenlerin, direktiflerin veya boruların diğer modüller tarafından kullanılabilir olmasını sağlar. Böylece bu öğeleri diğer modüllerle paylaşabilirsiniz.
