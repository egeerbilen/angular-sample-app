import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * `CanComponentDeactivate` tipi, deaktive edilip edilemeyeceğini gösteren bir Observable, Promise veya
 * boolean döndüren bir `canDeactivate` fonksiyonuna sahip bir nesneyi tanımlar.
 * @property canDeactivate - `canDeactivate` özelliği, boolean değerlerin Observable'ını, boolean değerine
 * çözülen bir Promise'i veya senkron bir boolean değerini döndüren bir fonksiyondur. Bu fonksiyon genellikle
 * Angular uygulamalarında bir bileşenin deaktive edilip edilemeyeceğini veya başka bir yere yönlendirilip
 * yönlendirilemeyeceğini belirlemek için kullanılır.
 */
export type CanComponentDeactivate = {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
};

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
  /**
   * `canDeactivate` fonksiyonu, bir bileşenin `canDeactivate` metodunu kontrol eder ve çağırır,
   * sonucu döndürür.
   * @param {CanComponentDeactivate} component - `component` parametresi, `CanComponentDeactivate` türünde
   * bir interface veya sınıftır ve üzerinde tanımlanmış bir `canDeactivate` metoduna sahiptir. Bu metodun
   * bir `Observable<boolean>`, `Promise<boolean>` veya `boolean` döndürmesi beklenir.
   * @returns `canDeactivate` metodu, ya bir Observable<boolean>, bir Promise<boolean> veya bir boolean
   * değeri döndürür. Bu metot, `component`'in bir `canDeactivate` metoduna sahip olup olmadığını kontrol
   * eder ve varsa çağırır, aksi takdirde `true` döner.
   */
  public canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
