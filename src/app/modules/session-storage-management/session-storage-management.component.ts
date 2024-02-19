import { Component } from '@angular/core';

import { SessionstorageService } from './session-storage/session-storage.service';

@Component({
  selector: 'app-session-storage-management',
  templateUrl: './session-storage-management.component.html',
  styleUrls: ['./session-storage-management.component.css']
})
export class SessionStorageManagementComponent {
  storedValue = '';

  constructor(private _sessionStorageService: SessionstorageService) {}

  /**
   * Session Storage'a bir değer eklemek için kullanılan fonksiyon.
   * @description 'myKey' anahtarıyla 'Merhaba, sessionStorage!' değerini Session Storage'a ekler.
   */
  public setValue() {
    this._sessionStorageService.setSessionData('myKey', 'Merhaba, sessionStorage!');
  }

  /**
   * Session Storage'dan bir değeri almak için kullanılan fonksiyon.
   * @description 'myKey' anahtarıyla Session Storage'dan bir değeri alır ve bu değeri 'storedValue' değişkenine atar. Eğer değer yoksa, boş bir dize atanır.
   */
  public getValue() {
    const storedValue = this._sessionStorageService.getSessionData('myKey');
    this.storedValue = storedValue !== null ? storedValue : '';
  }
}
