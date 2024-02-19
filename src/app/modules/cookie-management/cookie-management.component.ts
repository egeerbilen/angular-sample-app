import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-management',
  templateUrl: './cookie-management.component.html',
  styleUrls: ['./cookie-management.component.css']
})
export class CookieManagementComponent {
  cookieValue: string | undefined;

  constructor(private _cookieService: CookieService) {}

  /**
   * Yeni bir çerez ekler.
   * @description Örnek çerezler ekler: 'exampleCookie' ve 'myCookie' (1 günlük ömür)
   */
  public addCookie(): void {
    this._cookieService.set('exampleCookie', 'This is an example cookie value');
    this._cookieService.set('myCookie', 'cookie value', { expires: 1 }); // Örnek olarak 1 günlük bir ömür
  }

  /**
   * Belirtilen çerezin değerini alır ve tüm çerezleri konsola yazdırır.
   * @description 'exampleCookie' çerezinin değerini alır ve tüm çerezleri konsola yazdırır.
   */
  public getCookieValue(): void {
    this.cookieValue = this._cookieService.get('exampleCookie');
    console.log(this._cookieService.getAll());
  }

  /**
   * Belirtilen çerezi siler ve çerez değerini sıfırlar.
   * @description 'exampleCookie' çerezini siler ve çerez değerini sıfırlar.
   */
  public deleteCookie(): void {
    this._cookieService.delete('exampleCookie');
    this.cookieValue = undefined;
  }
}
