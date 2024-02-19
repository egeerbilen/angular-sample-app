import { Component } from '@angular/core';

import { AsyncAwaitService } from './async-await/async-await.service';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent {
  constructor(private _asyncAwaitService: AsyncAwaitService) {}

  /**
   * Asenkron operasyonu bekleyen ve ardından logları yazan bir asyncAwait metodu.
   */
  public async asyncAwait(): Promise<void> {
    console.log('Bekleeedi 111');
    console.log(await this._asyncAwaitService.exampleAsyncOperation());
    console.log('Bekleeedi 222');
  }

  /**
   * Asenkron operasyonu beklemeyen ve direkt olarak logları yazan bir notAwait metodu.
   * Asenkron operasyon sonuçlarına ve hatalarına yanıt vermez.
   */
  public notAwait(): void {
    console.log('Bekleeedi 111');
    console.log(this._asyncAwaitService.exampleAsyncOperation());
    console.log('Bekleeedi 222');
  }
}
