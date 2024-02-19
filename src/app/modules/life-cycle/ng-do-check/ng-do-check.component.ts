import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.css']
})
export class NgDoCheckComponent implements DoCheck {
  counter = 0;
  prevCounter = 0;
  text = '';

  /**
   * ngDoCheck fonksiyonu, sayaç değeri değiştiğinde tetiklenir ve bir değişiklik algılandığında belirli
   * işlemleri gerçekleştirir.
   */
  public ngDoCheck(): void {
    console.log(this.text);
    if (this.counter !== this.prevCounter) {
      console.log('Counter changed! DoCheck triggered.');
      // Burada yapılacak işlemler, değişiklik algılandığında çalışır.
      // Örneğin:
      // this.someFunction();
      this.prevCounter = this.counter; // Önceki değeri güncelle
    }
  }

  /**
   * increment fonksiyonu, sayaç değerini bir artırır.
   */
  public increment(): void {
    this.counter++;
  }
}
