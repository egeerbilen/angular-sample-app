import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-router',
  templateUrl: './ng-router.component.html',
  styleUrls: ['./ng-router.component.css']
})
export class NgRouterComponent {
  preserveCode = `
  // Varsayalım mevcut URL şu şekilde: '/urunler'
  const mevcutParametreler = { kategori: 'elektronik', fiyat: 'ucuz' };
  
  // Yeni bir filtreleme yapılıyor ve bu filtreleme sonucu sorgu parametreleri ekleniyor
  const yeniParametreler = { kategori: 'telefon', fiyat: 'orta' };
  
  // navigate kullanırken queryParamsHandling: 'preserve' kullanımı
  this.router.navigate(['/urunler'], {
    queryParamsHandling: 'preserve',
    queryParams: yeniParametreler
  });
  `;
  mergeCode = `
  // Varsayalım mevcut URL şu şekilde: '/urunler?kategori=elektronik&fiyat=ucuz'

  // Mevcut sorgu parametreleri
  const mevcutParametreler = { kategori: 'elektronik', fiyat: 'ucuz' };
  
  // Yeni bir parametre eklenmek isteniyor
  const yeniParametre = { sayfa: 2 };
  
  // navigate kullanırken queryParamsHandling: 'merge' kullanımı
  this.router.navigate(['/urunler'], {
    queryParamsHandling: 'merge',
    queryParams: { ...mevcutParametreler, ...yeniParametre }
  });
  `;
  emptyCode = `
  // Yeni bir parametre eklenmek isteniyor
  const yeniParametre = { sayfa: 2 };

  // navigate kullanırken queryParamsHandling: 'empty' kullanımı
  this.router.navigate(['/urunler'], {
    queryParamsHandling: 'empty',
    queryParams: yeniParametre
  });
  `;
  relativeTo = `
  public redirectToUrl(): void {
    this._router.navigate(['/urlGetId', 1, 'Ege'], { queryParams: { surname: 'Erbilen' }, fragment: 'section4' });
  }
  `;

  constructor(private _router: Router) {}

  /**
   * `redirectToUrl` fonksiyonu, parametreler ve bir fragment ile belirli bir URL'e yönlendirme işlemini
   * gerçekleştirir. Bu işlem TypeScript uygulamasında kullanılır.
   */
  public redirectToUrl(): void {
    this._router.navigate(['/urlGetId', 1, 'Ege'], { queryParams: { surname: 'Erbilen' }, fragment: 'section4' });
  }
}
