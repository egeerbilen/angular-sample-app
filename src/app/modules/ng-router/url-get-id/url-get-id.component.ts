import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-url-get-id',
  templateUrl: './url-get-id.component.html',
  styleUrls: ['./url-get-id.component.css']
})
export class UrlGetIdComponent implements OnInit {
  itemId = '';
  surname = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _elementRef: ElementRef
  ) {}

  /**
   * TypeScript'teki ngOnInit fonksiyonu, rotaya ait parametreleri, sorgu parametrelerini ve fragment'leri
   * dinleyerek itemId özelliğini buna göre günceller.
   */
  public ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.itemId = params['id'] + ' ' + params['name'];
      // Do something with itemId, like fetch data using this ID
    });

    this._activatedRoute.queryParams.subscribe((params) => {
      this.itemId = this.itemId + ' ' + params['surname']; // Get the query parameter 'surname'
    });

    // sectionlar html içerisinde id ile belittilem yere gider
    this._activatedRoute.fragment.subscribe((fragment) => {
      const element = this._elementRef.nativeElement.querySelector('#' + fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    });
  }
}
