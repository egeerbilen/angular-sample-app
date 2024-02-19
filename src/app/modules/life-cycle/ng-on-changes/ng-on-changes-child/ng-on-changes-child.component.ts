import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-child',
  templateUrl: './ng-on-changes-child.component.html',
  styleUrls: ['./ng-on-changes-child.component.css']
})
export class NgOnChangesChildComponent implements OnChanges {
  @Input() inputValue = ''; // Giriş özelliği

  /**
   * TypeScript'teki ngOnChanges fonksiyonu, inputValue özelliğindeki değişiklikleri takip etmek ve önceki
   * ve yeni değerleri console'a kaydetmek için kullanılır.
   * @param {SimpleChanges} changes - "changes" parametresi, SimpleChanges türünde bir nesnedir. Bu nesne,
   * bileşenin giriş özelliklerinde tespit edilen değişiklikleri içerir.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    // Giriş özelliğindeki değişiklikleri izle
    if (changes['inputValue']) {
      const newValue = changes['inputValue'].currentValue;
      const previousValue = changes['inputValue'].previousValue;

      console.log('Önceki Değer:', previousValue);
      console.log('Yeni Değer:', newValue);
    }
  }
}
