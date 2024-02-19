import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init',
  templateUrl: './ng-after-view-init.component.html',
  styleUrls: ['./ng-after-view-init.component.css']
})
export class NgAfterViewInitComponent implements AfterViewInit {
  /**
   * ngAfterViewInit fonksiyonu, görünüm bileşenleri hazır olduğunda çağrılır ve görünüm öğeleri üzerinde
   * işlemler gerçekleştirmek için kullanılabilir.
   */
  public ngAfterViewInit(): void {
    // Bileşenin görünümü oluşturulduktan sonra burası çalışacak
    console.log('Bileşen görünümü oluşturuldu!');
  }
}
