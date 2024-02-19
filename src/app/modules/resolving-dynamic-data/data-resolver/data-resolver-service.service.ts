import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpRequestService } from '../../http-request/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverServiceService {
  constructor(private _httpRequestService: HttpRequestService) {}

  /**
   * `resolve` fonksiyonu, bir mesajı konsola kaydeder ve `_httpRequestService` üzerinden `getUsers`
   * metodunu çağırarak `id` ve `name` özelliklerine sahip nesnelerin dizisini içeren bir Observable
   * döndürür.
   * @returns Her bir nesnenin `id` özelliğine number ve `name` özelliğine string türünde sahip olduğu
   * bir nesneler dizisinin Observable'ı.
   */
  public resolve(): Observable<Array<{ id: number; name: string }>> {
    console.log('Resolving Dynamic Data getUsers()');
    return this._httpRequestService.getUsers();
  }
}
