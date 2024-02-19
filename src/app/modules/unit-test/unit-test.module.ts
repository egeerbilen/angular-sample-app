import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UnitTestComponent } from './unit-test.component';
import { unitTestRoutes } from './unit-test.routing';

@NgModule({
  imports: [unitTestRoutes, CommonModule, FormsModule],
  declarations: [UnitTestComponent]
})
export class UnitTestModule {}
