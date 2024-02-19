import { AfterContentChecked, Component } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-checked',
  templateUrl: './ng-after-content-checked.component.html',
  styleUrls: ['./ng-after-content-checked.component.css']
})
export class NgAfterContentCheckedComponent implements AfterContentChecked {
  /**
   * ngAfterContentChecked() fonksiyonu, içerik kontrol edildiğinde her çağrıldığında bir değişiklik
   * olduğunu belirten bir mesajı console'a kaydeder.
   */
  public ngAfterContentChecked(): void {
    // İçerik her kontrol edildiğinde bu metod çalışır
    console.log('ngAfterContentChecked -> değişikliği oldu.');
  }
}
