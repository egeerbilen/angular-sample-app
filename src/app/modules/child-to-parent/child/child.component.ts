import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  // Child da girlen datayı parenta aktarma
  @Output() childDataChange = new EventEmitter<string>();

  /**
   * emitEvent fonksiyonu, 'Button was clicked!' mesajıyla bir olayı yayınlar.
   */
  public emitEvent(): void {
    this.buttonClicked.emit('Button was clicked!');
  }

  /**
   * Bu fonksiyon, etkinliği başlatan hedef öğenin değeri ile üst bileşeni günceller ve güncellenmiş veriyi yayınlar.
   * @param {any} eventTarget - eventTarget parametresi any türündedir, yani herhangi bir veri türünü kabul
   * edebilir. Bu, tetiklenen olayı başlatan hedef öğeyi temsil eder. Bu durumda, hedef öğenin değerini almak ve
   * bunu childData özelliğine atamak için kullanılır.
   */
  public updateParent(eventTarget: any): void {
    this.childDataChange.emit(eventTarget.value);
    // buraya verilen data @Input değilse emit işlemi gerçekleşmez
    // emit, genellikle olayların tetiklenmesi anlamına gelir.
  }
}
