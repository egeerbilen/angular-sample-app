import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child/child.component';
import { ParentToChildComponent } from './parent-to-child.component';
import { parentToChildRoutes } from './parent-to-child.routing';

@NgModule({
  imports: [parentToChildRoutes, CommonModule, FormsModule],
  declarations: [ParentToChildComponent, ChildComponent]
})
export class ParentToChildModule {}
