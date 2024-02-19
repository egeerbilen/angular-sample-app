import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.css']
})
export class NgOnInitComponent implements OnInit {
  /**
   * constructor fonksiyonu, bir bileşen oluşturulduğunda veri veya değişkenleri başlatmak için kullanılır.
   */
  constructor() {
    // Constructor sadece bileşen oluşturulurken çalışır.
    // Genellikle veri veya değişkenlerin tanımlanması için kullanılır.
    console.log('constructor calisti');
  }

  /**
   * ngOnInit fonksiyonu, bileşen oluşturulduktan hemen sonra çağrılır ve genellikle veri çekme veya HTTP istekleri gibi görevler için kullanılır.
   */
  public ngOnInit(): void {
    // ngOnInit, bileşen oluşturulduktan hemen sonra çalışır.
    // Genellikle veri alma veya HTTP istekleri gibi işlemler için kullanılır.
    console.log('Veri alındı!');
  }
}
