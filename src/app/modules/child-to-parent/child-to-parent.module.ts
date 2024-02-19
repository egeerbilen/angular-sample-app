import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child/child.component';
import { ChildToParentComponent } from './child-to-parent.component';
import { childToParentRoutes } from './child-to-parent.routing';

@NgModule({
  imports: [childToParentRoutes, CommonModule, FormsModule],
  declarations: [ChildToParentComponent, ChildComponent]
})
export class ChildToParentModule {}
