import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  text = '';
  ifCheckerValue = true;
  // ng if kullandığında hidden olmuyor direk olarak DOM içerisinden kaldırılıyor yani html den direk olarak kaldırılıyor

  /**
   * Fonksiyon, bir boolean değişkenin değerini tersine çevirir.
   */
  public ifChanger(): void {
    this.ifCheckerValue = !this.ifCheckerValue;
  }
}
