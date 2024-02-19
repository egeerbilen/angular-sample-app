import { Component } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent {
  dataFromParent = 'Initial data from parent';

  /**
   * Bu fonksiyon, bir düğme tıklandığında console'a eventData parametresini bastırır.
   * @param {string} eventData - eventData parametresi, düğme tıklama olayı ile ilişkilendirilen veriyi temsil eden bir dizedir.
   */
  public onButtonClicked(eventData: string): void {
    console.log(eventData);
  }

  /**
   * "updateDataFromParent" fonksiyonu, "dataFromParent" özelliğini "event" parametresinin değeri ile günceller.
   * @param {string} event - event parametresi, üst bileşenden geçirilen veriyi temsil eden bir dizedir.
   */
  public updateDataFromParent(event: string): void {
    this.dataFromParent = event;
  }
}
