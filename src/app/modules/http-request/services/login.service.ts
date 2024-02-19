import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // * Token ları zaten back-end de de kontrol edeceksin
  private _token = '';

  constructor() {
    this._token = localStorage.getItem('bearer_token') || ''; // || null undefined veya boş geldiği zaman sağ tarafı değer atayacak
  }

  /**
   * Bu fonksiyon, girişte kullanılan token'ı döndürür.
   * @returns `isLogin()` metodu, `_token` özelliğinin değerini döndürüyor, ki bu bir string'tir.
   */
  public isLogin(): string {
    return this._token;
  }

  /**
   * `setToken` fonksiyonu, bir token'ı yerel depoda saklar ve onu bir sınıf özelliğine atar.
   * @param {string} token - `setToken` fonksiyonundaki `token` parametresi, tarayıcının `localStorage`'ında
   * 'bearer_token' anahtarıyla saklanacak kimlik doğrulama token'ını temsil eden bir string'dir. Bu token,
   * bu fonksiyonu içeren nesnenin veya sınıfın `_token` özelliğine de atanır.
   */
  public setToken(token: string) {
    localStorage.setItem('bearer_token', token);
    this._token = token;
    console.log('Giriş yapıldı');
  }

  /**
   * `removeToken` fonksiyonu, 'bearer_token'ı localStorage'dan kaldırır ve token değerini boş bir string'e
   * ayarlar.
   */
  public removeToken() {
    localStorage.removeItem('bearer_token');
    this._token = '';
    console.log("Token localStorage'dan kaldırıldı");
  }

  /**
   * Bu fonksiyon, bir string token veya null değeri döndürür.
   * @returns `getToken` metodu, `string` veya `null` türünde bir değer döndürüyor.
   */
  public getToken(): string | null {
    return this._token;
  }
}
