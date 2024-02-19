import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { AdapterComponent } from './adapter/adapter.component';
import { BridgeComponent } from './bridge/bridge.component';
import { BuilderPatternComponent } from './builder-pattern/builder-pattern.component';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';
import { CommandComponent } from './command/command.component';
import { CompositeComponent } from './composite/composite.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DesignePatternComponent } from './designe-pattern.component';
import { designePatternRoutes } from './designe-pattern.routing';
import { FacadeComponent } from './facade/facade.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { IteratorComponent } from './iterator/iterator.component';
import { ObserverComponent } from './observer/observer.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { SingletonComponent } from './singleton/singleton.component';
import { StrategyComponent } from './strategy/strategy.component';

@NgModule({
  imports: [designePatternRoutes, CommonModule, HighlightModule, RouterModule.forRoot([])],
  declarations: [
    DesignePatternComponent,
    AbstractFactoryComponent,
    AdapterComponent,
    BridgeComponent,
    BuilderPatternComponent,
    ChainOfResponsibilityComponent,
    CommandComponent,
    CompositeComponent,
    DecoratorComponent,
    FacadeComponent,
    FactoryMethodComponent,
    IteratorComponent,
    ObserverComponent,
    PrototypeComponent,
    SingletonComponent,
    StrategyComponent
  ],
  providers: []
})
export class DesignePatternModule {}
