import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { userToken } from 'src/app/enums/token';

import { HttpRequestService } from './services/http-request.service';
import { LoadingPageService } from './services/loading-page.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent {
  constructor(
    public loadingPageService: LoadingPageService,
    private _httpRequestService: HttpRequestService,
    private _jwtHelperService: JwtHelperService,
    private _loginService: LoginService
  ) {}

  /**
   * "getUsers" fonksiyonu, kullanıcı verilerini almak için bir HTTP isteği yapar ve yanıtı ile hataları
   * uygun şekilde ele alır.
   */
  public getUsers(): void {
    this._httpRequestService.getUsers().subscribe(
      (response: any) => {
        console.log(response);
        // Handle the received data here
      },
      (error: any) => {
        console.error('An error occurred:', error);
        // Handle errors here
      }
    );
  }

  /**
   * `addUser` fonksiyonu, yetkilendirme kontrolü yapar ve ardından id'si 4 ve adı 'Ege' olan bir kullanıcı
   * eklemek için bir istek gönderir.
   * @returns Eğer kullanıcı giriş yapmamışsa (`!this._loginService.isLogin()` koşuluna dayalı olarak),
   * fonksiyon, kullanıcı eklemek için HTTP isteği yapmadan önce geri dönecektir. Eğer kullanıcı giriş yapmışsa,
   * fonksiyon, belirtilen id ve ad ile bir kullanıcı eklemek için HTTP isteği yapacak ve ardından yanıtı console'a
   * kaydedecektir.
   */
  public addUser() {
    // Yetki kontrolü burada yapılır
    if (!this._loginService.isLogin()) {
      return;
    }

    this._httpRequestService.addUser({ id: 4, name: 'Ege' }).subscribe((response: { id: number; name: string }) => {
      console.log(response);
    });
  }

  /**
   * `updateUsers` fonksiyonu, kullanıcı giriş yapmışsa belirtilen ID'ye sahip bir kullanıcının adını
   * günceller.
   * @returns Eğer kullanıcı giriş yapmamışsa, fonksiyon herhangi bir güncelleme yapmadan geri dönecektir.
   * Eğer kullanıcı giriş yapmışsa, HTTP isteği yaparak ID'si 4 olan ve adı 'güncellenmiş Ege Adı' olan
   * kullanıcıyı güncelleyecektir. HTTP isteğinin yanıtı console'a kaydedilecektir.
   */
  public updateUsers() {
    if (!this._loginService.isLogin()) {
      return;
    }

    this._httpRequestService.updateUser({ id: 4, name: 'updated Ege Name' }).subscribe((response: { id: number; name: string }) => {
      console.log(response);
    });
  }

  /**
   * `deleteUsers` fonksiyonu, bir kullanıcının giriş yapılıp yapılmadığını kontrol eder ve ardından bir HTTP
   * servisi kullanarak ID'si 4 olan bir kullanıcıyı silme isteği gönderir.
   * @returns Eğer kullanıcı giriş yapmamışsa, fonksiyon silme isteğini gerçekleştirmeden geri dönecektir.
   * Eğer kullanıcı giriş yapmışsa, fonksiyon ID'si 4 olan kullanıcıyı silmek için bir HTTP isteği yapacak
   * ve yanıtı console'a kaydedecektir.
   */
  public deleteUsers() {
    if (!this._loginService.isLogin()) {
      return;
    }

    this._httpRequestService.deleteUser(4).subscribe((response: Array<{ id: number; name: string }>) => {
      console.log(response);
    });
  }

  /**
   * `createToken` fonksiyonu, örnek bir token oluşturur ve bunu bir giriş servisi kullanarak ayarladıktan
   * sonra localStorage'a kaydeder.
   */
  public createToken(): void {
    // Örnek bir token oluşturma (gerçek projede token üretimini JWT veya diğer bir yöntemle yapmalısınız)

    // Payload
    // {
    //   "userId": "1",
    //   "username": "exampleUser",
    //   "roles": [
    //     "admin",
    //     "editor"
    //   ]
    // }
    // VERIFY SIGNATURE -> angular
    this._loginService.setToken(userToken);
    // Token'i localStorage'a kaydetme
  }

  /**
   * `removeToken` fonksiyonu, bir token'ı localStorage'dan siler.
   */
  public removeToken(): void {
    // Token'i localStorage'dan silme
    this._loginService.removeToken();
  }

  /**
   * `decodeToken` fonksiyonu, localStorage'dan bir token alır, JWT yardımcı servisi kullanarak bu token'ı
   * çözer ve çözülmüş token'ı console'a kaydeder.
   */
  public decodeToken() {
    const token = localStorage.getItem('bearer_token');

    if (token !== null) {
      const decodedToken = this._jwtHelperService.decodeToken(token);
      console.log('Decoded Token:', decodedToken);

      // Diğer işlemler buraya
    }
  }

  /**
   * `loadingPage` fonksiyonu, bir yükleniyor spinner'ı görüntüler, asenkron veri yükleme simüle eder ve
   * 2 saniye sonra spinner'ı gizler.
   */
  public loadingPage() {
    // Loading erkanı çıkarma için yapılabilir
    this.loadingPageService.show();
    // Veri yükleme işlemlerinizi burada gerçekleştirin, ardından işlem tamamlandığında spinner'ı gizleyin
    // Simülasyon amaçlı, asenkron veri yükleme işlemini simüle etmek için setTimeout kullanılıyor
    setTimeout(() => {
      // Veri yüklendikten sonra loading spinner'ı gizleme işlevselliği
      this.loadingPageService.hide();
    }, 2000);
  }
}
