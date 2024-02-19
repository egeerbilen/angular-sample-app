import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passing-static-data-to-route',
  templateUrl: './passing-static-data-to-route.component.html',
  styleUrls: ['./passing-static-data-to-route.component.css']
})
export class PassingStaticDataToRouteComponent implements OnInit {
  pageTitle = '';
  pageDescription = '';

  constructor(private _route: ActivatedRoute) {}

  /**
   * TypeScript'te `ngOnInit` fonksiyonu, pageTitle ve pageDescription özelliklerini mevcut route snapshot'ındaki
   * verilere göre ayarlar.
   */
  public ngOnInit(): void {
    this.pageTitle = this._route.snapshot.data['title'];
    this.pageDescription = this._route.snapshot.data['description'];
  }

  /**
   * `snapshotChange` fonksiyonu, başlık verisini route snapshot'ındaki veriyi günceller ve güncellenmiş veriyi
   * konsola kaydeder.
   */
  public snapshotChange(): void {
    this._route.snapshot.data['title'] = 'Snapshot değişti :D';
    this.pageTitle = this._route.snapshot.data['title'];
    console.log(this._route.snapshot.data);
  }
}
