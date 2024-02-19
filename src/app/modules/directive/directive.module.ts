import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DirectiveComponent } from './directive.component';
import { directiveRoutes } from './directive.routing';
import { DirectiveDirective } from './dr/directive.directive';

@NgModule({
  imports: [directiveRoutes, FormsModule, CommonModule], // Directive'ı burada da tanımla
  declarations: [DirectiveComponent, DirectiveDirective]
})
export class DirectiveModule {}
