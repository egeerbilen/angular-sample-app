import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionstorageService {
  /**
   * Session Storage'a bir değer eklemek için kullanılan fonksiyon.
   * @param key Eklenen değerin anahtarı
   * @param value Eklenen değer
   */
  public setSessionData(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  /**
   * Session Storage'dan bir değeri almak için kullanılan fonksiyon.
   * @param key Alınan değerin anahtarı
   * @returns Session Storage'dan alınan değer veya null (eğer anahtar bulunamazsa)
   */
  public getSessionData(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
