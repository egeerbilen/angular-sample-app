import { Component } from '@angular/core';

import { LogingServiceService } from './service/loging-service.service';

@Component({
  selector: 'app-logging-service',
  templateUrl: './logging-service.component.html',
  styleUrls: ['./logging-service.component.css']
})
export class LoggingServiceComponent {
  constructor(private _logingServiceService: LogingServiceService) {}

  /**
   * `logMessage` fonksiyonu, bir TypeScript günlükleme servisi kullanarak bir mesajı, bir hata mesajını
   * ve bir uyarı mesajını kaydeder.
   */
  public logMessage(): void {
    this._logingServiceService.log('Bu bir log mesajıdır.');

    this._logingServiceService.error('Bu bir hata mesajıdır.');

    this._logingServiceService.warn('Bu bir uyarı mesajıdır.');
  }

  // servisler aslında helper olarak da kullanlıa bilir deriz generic bir servis yaparıs null ya da bos olup olmadığını kontrol eden bir yapı yapıla bilir gibi.
}
