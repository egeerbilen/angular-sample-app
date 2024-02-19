import { Component } from '@angular/core';

import { HttpRequestService } from '../http-request/services/http-request.service';
import { CacheService } from './service/cache.service';

@Component({
  selector: 'app-cache-management',
  templateUrl: './cache-management.component.html',
  styleUrls: ['./cache-management.component.css']
})
export class CacheManagementComponent {
  constructor(
    private _cacheService: CacheService,
    private _httpRequestService: HttpRequestService
  ) {}

  /**
   * Örnek bir veriyi önbelleğe (cache) alma işlemi için kullanılan setData metodu.
   */
  public setData(): void {
    const data = { example: 'cached data' };
    this._cacheService.set('cachedData', data);
  }

  /**
   * Önbellekten veri almak için kullanılan getData metodu.
   * Eğer veri önbellekte varsa, alınan veriyle burada bir işlem yapabilirsiniz.
   * Eğer önbellekte veri yoksa, istek atarak veriyi alabilirsiniz.
   */
  public getData(): void {
    const cachedData = this._cacheService.get('cachedData');

    if (cachedData) {
      console.log(cachedData);
    } else {
      // Eğer önbellekte veri yoksa, HTTP isteği göndererek veriyi alın
      this._httpRequestService.getUsers().subscribe((data) => {
        console.log(data);
      });
    }
  }

  /**
   * Önbellekte belirli bir anahtarın varlığını kontrol etmek için kullanılan checkData metodu.
   */
  public checkData(): void {
    const hasData = this._cacheService.has('cachedData');
    console.log('Data Exists in Cache:', hasData);
  }

  /**
   * Önbellekten tüm veriyi temizlemek için kullanılan clearData metodu.
   */
  public clearData(): void {
    this._cacheService.clear();
    console.log('Cache Cleared');
  }
}
