import { RouterModule, Routes } from '@angular/router';

import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { AdapterComponent } from './adapter/adapter.component';
import { BridgeComponent } from './bridge/bridge.component';
import { BuilderPatternComponent } from './builder-pattern/builder-pattern.component';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';
import { CommandComponent } from './command/command.component';
import { CompositeComponent } from './composite/composite.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DesignePatternComponent } from './designe-pattern.component';
import { FacadeComponent } from './facade/facade.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { IteratorComponent } from './iterator/iterator.component';
import { ObserverComponent } from './observer/observer.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { SingletonComponent } from './singleton/singleton.component';
import { StrategyComponent } from './strategy/strategy.component';

const routes: Routes = [
  {
    path: 'designePattern',
    component: DesignePatternComponent,
    title: 'Designe Pattern',
    children: [
      {
        path: 'abstractFactory',
        component: AbstractFactoryComponent,
        title: 'Abstract Factory',
        pathMatch: 'full'
      },
      {
        path: 'adapter',
        component: AdapterComponent,
        title: 'Adapter',
        pathMatch: 'full'
      },
      {
        path: 'bridge',
        component: BridgeComponent,
        title: 'Bridge',
        pathMatch: 'full'
      },
      {
        path: 'builder',
        component: BuilderPatternComponent,
        title: 'Builder',
        pathMatch: 'full'
      },
      {
        path: 'chainOfResponsibility',
        component: ChainOfResponsibilityComponent,
        title: 'Chain of Responsibility',
        pathMatch: 'full'
      },
      {
        path: 'command',
        component: CommandComponent,
        title: 'Command',
        pathMatch: 'full'
      },
      {
        path: 'composite',
        component: CompositeComponent,
        title: 'Composite',
        pathMatch: 'full'
      },
      {
        path: 'decorator',
        component: DecoratorComponent,
        title: 'Decorator',
        pathMatch: 'full'
      },
      {
        path: 'facade',
        component: FacadeComponent,
        title: 'Facade',
        pathMatch: 'full'
      },
      {
        path: 'factoryMethod',
        component: FactoryMethodComponent,
        title: 'Factory Method',
        pathMatch: 'full'
      },
      {
        path: 'iterator',
        component: IteratorComponent,
        title: 'Iterator',
        pathMatch: 'full'
      },
      {
        path: 'observer',
        component: ObserverComponent,
        title: 'Observer',
        pathMatch: 'full'
      },
      {
        path: 'prototype',
        component: PrototypeComponent,
        title: 'Prototype',
        pathMatch: 'full'
      },
      {
        path: 'singleton',
        component: SingletonComponent,
        title: 'Singleton',
        pathMatch: 'full'
      },
      {
        path: 'strategy',
        component: StrategyComponent,
        title: 'Strategy',
        pathMatch: 'full'
      }
    ]
  }
];

export const designePatternRoutes = RouterModule.forChild(routes);
