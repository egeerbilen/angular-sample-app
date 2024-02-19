import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environment';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor(
    private _loginService: LoginService,
    private _cookieService: CookieService
  ) {}
  // Daha sonra bu interceptor'ı AppModule'unuzda veya bir servis modülünde kullanmanız gerekiyor.
  // Bunun için, Angular'un HTTP_INTERCEPTORS token'ını kullanarak interceptor'ı provide etmeniz gerekiyor:
  // TODO make Enum for apiUrl

  /**
   * Bu TypeScript fonksiyonu, HTTP isteklerini yakalar, isteği manipüle eder, yetkilendirme ve çerez gibi
   * başlıklar ekler, başarılı yanıtları veya hataları kaydeder.
   * @param request - `intercept` methodundaki `request` parametresi, gönderilmeden önce yakalanan HTTP
   * isteğini temsil eder. İsteğin URL'si, başlıkları, gövdesi ve isteğin diğer ilgili ayrıntıları gibi
   * bilgileri içerir. Sağlanan kod örneğinde, `request` nesnesi şu şekilde kullanılıyor:
   * @param {HttpHandler} next - `intercept` methodundaki `next` parametresi, bir `HttpHandler` örneğidir.
   * Şu anki interceptor'dan sonra çağrılacak interceptor zincirindeki sonraki interceptor'ı temsil eder.
   * `next` nesnesi, HTTP isteğini sunucuya gerçekten gönderme sorumluluğuna sahiptir.
   * @returns `intercept` methodu, `next.handle(modifiedRequest)` çağrısı ile devam eden HTTP istek
   * işleme sürecini temsil eden `HttpEvent<any>` türünde bir Observable döndürür. Bu Observable, başarılı
   * yanıtları kaydetmek ve hataları ele almak için sırasıyla `tap` ve `catchError` operatörlerine yönlendirilir.
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ! Burası HTTP isteği yakalandığında çalışacak yer Her istek giderken buraya girecek imp edilsede edilmesede
    // Request manipülasyonları burada yapılabilir

    console.log('InterceptorService çalıştı');
    console.log(request);

    /* Bu kod parçası, orijinal HTTP isteğinin modifiye edilmiş bir sürümünü oluşturuyor. İsteği
   sunucuya göndermeden önce bazı değişiklikler yapılıyor. Modifikasyonun her bir kısmı şu işlevlere
   sahiptir: */
    const modifiedRequest = request.clone({
      url: environment.apiUrl + request.url, // Concatenate the base URL with the request URL
      setHeaders: {
        authorization: this._loginService.getToken() || '', // Set Authorization header
        // Cookie başlığını eklemeye gerek yok, tarayıcı bunu zaten ekler json server desteklemediğinden cookileri gönderemeyiz
        ex: this._cookieService.get('exampleCookie') // gibi ek olarak başka bir cookie de eklene bilir
      }
    });

    // sadece next.handle(modifiedRequest) diyerek de devam edebilirdik
    /* Bu kod parçası, RxJS operatörlerini kullanarak HTTP yanıtı olaylarını ele alıyor. Şimdi size her bir kısmını açıklayayım: */
    return next.handle(modifiedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('İstek başarılı oldu:', event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Bir hata oluştu:', error);
        return throwError(error);
      })
    );
  }
}
