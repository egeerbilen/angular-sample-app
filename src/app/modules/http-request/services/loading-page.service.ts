import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingPageService {
  public isLoading = false;

  /**
   * `show` fonksiyonu, `isLoading` özelliğini true olarak ayarlar.
   */
  public show() {
    this.isLoading = true;
  }

  /**
   * `hide` fonksiyonu, `isLoading` özelliğini false olarak ayarlar.
   */
  public hide() {
    this.isLoading = false;
  }
}
