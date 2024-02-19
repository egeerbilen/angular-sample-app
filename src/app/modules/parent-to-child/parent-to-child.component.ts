import { Component, ViewChild } from '@angular/core';

import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent {
  @ViewChild('childComponent') childComponent?: ChildComponent; // Child componentdeki bir metodu çalıştırmak için gerekli
  parentMessage = 'Hello from parent';

  /**
   * Fonksiyon, varsa alt bileşende bir yöntemi tetikler.
   */
  public triggerChildMethod(): void {
    // Çocuk bileşende bulunan bir metodu burada tetikleyebilirsiniz
    this.childComponent?.childMethod();
  }
}
