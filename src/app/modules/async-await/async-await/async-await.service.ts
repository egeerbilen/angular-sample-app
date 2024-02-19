import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncAwaitService {
  /**
   * Asenkron bir operasyonu temsil eden örnekAsyncOperasyon metodu.
   * @returns Promise<string>, işlem başarılı olursa 'İşlem başarılı oldu!' metni ile tamamlanan bir Promise döner.
   * İşlem başarısız olursa 'İşlem başarısız!' metni ile reddedilen bir Promise döner.
   */
  public exampleAsyncOperation(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // İşlemler burada gerçekleştirilir
      // Örnek olarak, bir HTTP isteği yapılabilir:
      // httpClient.get('https://example.com/data')
      //   .subscribe(
      //     (response) => resolve(response),
      //     (error) => reject(error)
      //   );

      // Yalnızca basit bir süre bekletme örneği:
      setTimeout(() => {
        const success = true; // İşlem başarılı mı?

        if (success) {
          resolve('İşlem başarılı oldu!');
        } else {
          reject('İşlem başarısız!');
        }
      }, 2000); // Örnek olarak 2 saniye bekletme
    });
  }
}
