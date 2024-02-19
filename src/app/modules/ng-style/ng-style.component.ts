import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  style = '';

  /**
   * Fonksiyon, bir öğenin stilini siyah arka plan rengi ve akvaryum mavi metin rengi içerecek şekilde ayarlar.
   */
  public setStyle(): void {
    this.style = 'background-color: black; color: aquamarine;';
  }
}
