import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private _cache: Map<string, any> = new Map();

  /**
   * Bellek önbelleğine veri ekler.
   * @param key Önbellek anahtarı
   * @param data Eklenen veri
   */
  public set(key: string, data: any): void {
    this._cache.set(key, data);
  }

  /**
   * Bellek önbelleğinden veri alır.
   * @param key Önbellek anahtarı
   * @returns Önbellekteki veri
   */
  public get(key: string): any {
    return this._cache.get(key);
  }

  /**
   * Bellek önbelleğini temizler, tüm verileri siler.
   */
  public clear(): void {
    this._cache.clear();
  }

  /**
   * Belirtilen anahtarın önbellekte olup olmadığını kontrol eder.
   * @param key Kontrol edilecek anahtar
   * @returns Anahtarın önbellekte olup olmadığı durumu (true/false)
   */
  public has(key: string): boolean {
    return this._cache.has(key);
  }

  /**
   * Belirtilen anahtarı bellek önbelleğinden siler.
   * @param key Silinecek anahtar
   * @returns Anahtarın başarıyla silinip silinmediği durumu (true/false)
   */
  public delete(key: string): boolean {
    return this._cache.delete(key);
  }
}
