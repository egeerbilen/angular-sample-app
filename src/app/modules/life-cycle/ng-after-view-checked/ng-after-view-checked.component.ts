import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-checked',
  templateUrl: './ng-after-view-checked.component.html',
  styleUrls: ['./ng-after-view-checked.component.css']
})
export class NgAfterViewCheckedComponent implements AfterViewChecked {
  /**
   * "changeMessage" fonksiyonu, "Run AfterViewChecked" mesajını console'a kaydeder.
   */
  public changeMessage(): void {
    console.log('Run AfterViewChecked');
  }

  /**
   * ngAfterViewChecked fonksiyonu, bileşenin görünümü kontrol edildiğinde işlemler gerçekleştirmek için kullanılır.
   */
  public ngAfterViewChecked(): void {
    // Burada ngAfterViewChecked yöntemi kullanımına örnek olacak işlemler yapılabilir
    console.log('ngAfterViewChecked çalıştı: Bileşenin görünümü kontrol edildi.');
    // Örnek: Bileşenin görünümü değiştiğinde yapılacak işlemler burada gerçekleştirilebilir.
  }
}
