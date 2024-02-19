import { Component, OnDestroy } from '@angular/core';
import { catchError, interval, Observable, Observer, Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnDestroy {
  private _subscription: Subscription;

  constructor() {
    // Belirli bir zaman aralığında işlemi gerçekleştirmek için interval kullanımı
    this._subscription = interval(1000).subscribe(() => {
      // Millisaniye cinsinden zaman aralığı (örneğin her 1 saniyede bir)
      console.log('Something is done!'); // Her zaman aralığında yapılacak işlem
    });
  }

  /**
   * ngOnDestroy fonksiyonu TypeScript'te bir bileşen yok edildiğinde bellek sızıntılarını önlemek için bir observable'dan
   * aboneliği iptal etmek için kullanılır.
   */
  public ngOnDestroy() {
    // Bileşen yok edildiğinde aboneliği iptal etmek için, eğer yok edilmezse sürekli konsola yazı yazdırır
    console.log('Observable abonelik iptal edildi');
    this._subscription.unsubscribe();
  }

  /**
   * Bu fonksiyon, bir hatayı simüle eden ve RxJS'deki catchError operatörünü kullanarak işleyen bir observable oluşturur.
   */
  public observablesErrors(): void {
    const myObservable = new Observable((observer) => {
      // Bir hatayı simüle et
      observer.error('Bir şeyler ters gitti!');
    });

    myObservable
      .pipe(
        catchError((error) => {
          console.error('Hata oluştu:', error);
          // Yeni bir observable döndür veya hatayı yeniden fırlat
          return throwError('Özel hata mesajı');
        })
      )
      .subscribe(
        (data) => console.log('Alındı:', data),
        // Hata işleyici, hatalar için çağrılacaktır
        (error) => console.error('Hata yakalandı:', error),
        () => console.log('Tamamlandı') // Hata durumunda çağrılmaz
      );
  }

  /**
   * Bu fonksiyon, iki veri değeri yayınlayan ve tamamlayan bir observable oluşturur ve ona abone olur.
   */
  public observablesCompletion(): void {
    const myObservable = new Observable((observer) => {
      observer.next('İlk veri');
      observer.next('İkinci veri'); // next() metodu, bir Observable içinde yeni bir değer veya olay yayınlamak için kullanılır.
      observer.complete(); // Observable'ın tamamlandığını gösterir
    });

    myObservable.subscribe(
      (data) => console.log('Alındı:', data),
      (error) => console.error('Hata oluştu:', error),
      () => console.log('Tamamlandı') // Observable tamamlandığında çağrılacaktır
    );
  }

  /**
   * `observablesNext` fonksiyonu, her saniye artan bir sayıyı yayınlayan ve abone olarak bu sayıları konsola yazdıran bir Observable oluşturur.
   * Sayı 5'e ulaştığında aboneliği iptal eder.
   */
  public observablesNext() {
    // Observer<number>  number dönecek
    const myObservable = new Observable((observer: Observer<number>) => {
      // Her saniyede bir artan bir sayı üretelim ve gönderelim
      let count = 0;
      const interval = setInterval(() => {
        count++;
        observer.next(count); // Her saniyede bir yeni değeri gönderelim
      }, 1000);

      // Observer iptal edildiğinde interval'i temizleyelim, çok önemli değil yani
      return () => {
        clearInterval(interval);
      };
    });

    // Observable'ı kullanarak veriyi dinleyelim (subscribe)
    const subscription = myObservable.subscribe((data: number) => {
      console.log(data); // Her saniyede bir artan sayıyı konsola yazdırır
      if (data === 5) {
        console.log('observablesNext yok edildi');
        subscription.unsubscribe(); // Aboneliği iptal et
      }
    });
  }
}

// Angular'da Subject<> sınıfı, bir yayın yapılabilen ve bu yayını dinleyen diğer bileşenlere veya servislere haber verebilen bir RxJS nesnesidir.
//  Subject<>, hem Observable hem de Observer özelliklerini bir arada sunar ve birden fazla dinleyiciye yayın yapabilir.

// import { Subject } from 'rxjs';

// Yeni bir Subject oluşturulur
// const mySubject = new Subject<number>();

// Bir değer yayınlanır
// mySubject.next(1);

// Yeni bir dinleyici (subscriber) ekleme
// const subscription = mySubject.subscribe((value) => {
//   console.log('Received value:', value);
// });

// Başka bir değer yayınlanır
// mySubject.next(2);
// mySubject.next(3);

// Dinleyiciyi iptal etme
// subscription.unsubscribe();

// Bu noktadan sonra, yayınlanan değerler dinleyiciye gitmez
// mySubject.next(4);
