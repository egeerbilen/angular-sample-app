import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment, reset } from './redux/actions/counter.actions';
import * as setUserData from './redux/actions/user.actions';
import { getSelectCount } from './redux/selectors/counter.selectors';
import { getUserData } from './redux/selectors/user.selectors';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.css']
})
export class NgRxComponent {
  count = 0;
  user = {};
  // OR
  // count$: Observable<number>;

  /**
   * Component'in constructor'ı.
   * @param _store Store servisine erişimi sağlar.
   * Store'dan gelen seçili sayı değerini ve kullanıcı verilerini izler.
   */
  constructor(private _store: Store) {
    // Seçili sayı değerini izleyen subscribe fonksiyonu.
    this._store.select(getSelectCount).subscribe((res) => {
      this.count = res;
    });

    // Kullanıcı verilerini izleyen subscribe fonksiyonu.
    this._store.select(getUserData).subscribe((res) => {
      this.user = res;
      console.log(res);
    });

    // Alternatif olarak, sayı değerini izlemek için observable'ı kullanma seçeneği:
    // this.count$ = this._store.select(getSelectCount);
  }

  /**
   * Sayı değerini artırmak için kullanılan metot.
   */
  public increment() {
    this._store.dispatch(increment());
  }

  /**
   * Sayı değerini azaltmak için kullanılan metot.
   */
  public decrement() {
    this._store.dispatch(decrement());
  }

  /**
   * Sayı değerini sıfırlamak için kullanılan metot.
   */
  public reset() {
    this._store.dispatch(reset());
  }

  /**
   * Kullanıcı verilerini güncellemek için kullanılan metot.
   */
  public setUserValue() {
    this._store.dispatch(setUserData.setUserData({ userData: { name: 'Ege', subject: 'NgRx' } }));
  }
}
