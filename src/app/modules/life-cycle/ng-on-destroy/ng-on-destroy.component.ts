import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ng-on-destroy',
  templateUrl: './ng-on-destroy.component.html',
  styleUrls: ['./ng-on-destroy.component.css']
})
export class NgOnDestroyComponent implements OnDestroy {
  private _dataSubscriptionContinue!: Subscription;

  // HttpClient kullanırken subscribe() işleminden sonra unsubscribe() yapmanıza gerek yoktur.
  // Angular'ın HttpClient'i, işlem tamamlandıktan sonra otomatik olarak bellek temizliği yapar ve kaynakları serbest bırakır.
  // Observable unsubscribe gerekir eğer Promise olsaydı gerek yoktu
  constructor() {
    this._dataSubscriptionContinue = interval(1000).subscribe((value) => {
      console.log('Value:', value);
    });
  }

  /**
   * ngOnDestroy fonksiyonu, bir bileşen yok edildiğinde bellek sızıntılarını önlemek amacıyla abonelikleri temizlemek için kullanılır.
   */
  public ngOnDestroy(): void {
    // Bileşen yok edildiğinde abonelik temizleniyor yoksa bellek tüketimine sebep olur
    // _dataSubscriptionContinue.unsubscribe() yapılmazsa örneğinde sürekli consola yazı yazdırır
    this._dataSubscriptionContinue.unsubscribe();
    console.log('Destroyed');
  }
}
