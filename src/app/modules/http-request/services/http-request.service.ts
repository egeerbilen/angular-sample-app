import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private _http: HttpClient) {}

  /**
   * TypeScript'teki getUsers fonksiyonu, bir mesajı kaydettikten ve Interceptor'ın çalışmasından önce,
   * id ve name özelliklerine sahip nesnelerin bir dizisinin Observable'ını döndürür.
   * @returns `id` özelliği number, `name` özelliği string olan nesnelerin dizisinin Observable'ını
   * temsil eden bir değer döndürülüyor.
   */
  public getUsers(): Observable<[{ id: number; name: string }]> {
    console.log('getUsers() method executed before the Interceptor');
    return this._http.get<[{ id: number; name: string }]>('users');
  }

  /**
   * `addUser` fonksiyonu, verilen id ve isimle yeni bir kullanıcı oluşturmak için bir POST isteği gönderir.
   * @param newUser - `newUser` parametresi, iki özelliğe sahip bir nesnedir:
   * @returns `addUser` fonksiyonu, `id` ve `name` özelliklerine sahip, her ikisi de sırasıyla number
   * ve string türünde olan bir nesnenin Observable'ını döndürür.
   */
  public addUser(newUser: { id: number; name: string }): Observable<{ id: number; name: string }> {
    return this._http.post<{ id: number; name: string }>('users', newUser);
  }

  /**
   * Bu TypeScript fonksiyonu, bir kullanıcının bilgilerini güncellemek için kullanıcının ID'si ve ismiyle bir
   * PUT isteği gönderir.
   * @param updateUser - `updateUser` parametresi, iki özelliğe sahip bir nesnedir:
   * @returns `updateUser` metodu, `{ id: number; name: string }` türünde bir Observable'ı döndürüyor.
   * Bu Observable, verilen `id` ve `name` ile bir kullanıcıyı güncellemek için bir PUT isteği yapıldığında
   * elde edilen sonucu temsil eder.
   */
  public updateUser(updateUser: { id: number; name: string }): Observable<{ id: number; name: string }> {
    return this._http.put<{ id: number; name: string }>('users/' + updateUser.id, updateUser);
  }

  /**
   * Bu TypeScript fonksiyonu, belirtilen ID'ye sahip bir kullanıcıyı siler ve kullanıcı ID ve ismini içeren
   * nesnelerin bir dizisinin Observable'ını döndürür.
   * @param {number} newUserId - `deleteUser` fonksiyonundaki `newUserId` parametresi, sistemden silmek
   * istediğiniz kullanıcının ID'sidir. Bu fonksiyon, belirtilen ID'ye sahip kullanıcıyı silmek için sunucuya
   * bir DELETE isteği gönderir.
   * @returns `id` özelliği number, `name` özelliği string olan nesnelerin dizisinin Observable'ını
   * temsil eden bir değer döndürülüyor.
   */
  public deleteUser(newUserId: number): Observable<Array<{ id: number; name: string }>> {
    return this._http.delete<[{ id: number; name: string }]>('users/' + newUserId);
  }
}
