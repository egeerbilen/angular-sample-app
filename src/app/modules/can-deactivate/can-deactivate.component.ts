import { Component } from '@angular/core';

import { CanComponentDeactivate } from './auth-guard/can-deactivate-guard.service';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.css']
})
export class CanDeactivateComponent implements CanComponentDeactivate {
  deactivateStatus = false;

  /**
   * `canDeactivate` fonksiyonu, kullanıcının bileşenden ayrılmasına belirli bir mantıksal duruma
   * dayalı olarak izin verilip verilmediğini kontrol eder; gerekirse kullanıcıya kaydedilmemiş
   * değişiklikleri onaylama mesajı gösterir.
   * @returns Eğer `deactivateStatus` true ise, kullanıcının sayfadan ayrılmak isteyip istemediğini
   * sormak için bir onay mesajı görüntülenir. Kullanıcı onaylarsa, kullanıcının deaktive edebileceğini
   * belirten true döner. Eğer `deactivateStatus` false ise, kullanıcının herhangi bir onay olmadan
   * deaktive edebileceğini belirten doğrudan true döner.
   */
  public canDeactivate(): boolean {
    // Kullanıcının bileşenden ayrılmasına izin verilip verilmediğini kontrol eden bir metot
    // Bileşenden ayrılmanın izin verilip verilmediğini kontrol etmek için mantıksal bir ifade
    // Örneğin, kaydedilmemiş değişiklikleri kontrol edin ve buna göre true veya false döndürün
    if (this.deactivateStatus) {
      return confirm('Bu sayfadan ayrılmak istediğinize emin misiniz? Kaydedilmemiş değişiklikler kaybolabilir.');
    }
    return true;
  }

  /**
   * `allowDeactivate` fonksiyonu, `deactivateStatus` özelliğini true ve false arasında
   * değiştirmektedir.
   */
  public allowDeactivate(): void {
    this.deactivateStatus = !this.deactivateStatus;
  }
}
