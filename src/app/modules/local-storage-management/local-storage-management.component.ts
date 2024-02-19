import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage-management',
  templateUrl: './local-storage-management.component.html',
  styleUrls: ['./local-storage-management.component.css']
})
export class LocalStorageManagementComponent implements OnInit {
  localStorageValue: string | null = null;

  /**
   * Komponent başlatıldığında, yerel depodan değeri alır.
   * @description Komponent başlatıldığında, yerel depodan değeri alır.
   */
  public ngOnInit() {
    // Retrieve the value from local storage on component initialization
    this.getValue();
  }

  /**
   * Yerel depoda bir değer saklamak için kullanılan fonksiyon.
   * @description 'sampleKey' anahtarıyla 'Sample Value' değerini yerel depoda saklar ve görüntülenen değeri günceller.
   */
  public setValue() {
    const valueToStore = 'Sample Value'; // Replace 'Sample Value' with your desired value
    localStorage.setItem('sampleKey', valueToStore);
    this.getValue(); // Update the displayed value
  }

  /**
   * Yerel depodan bir değeri almak için kullanılan fonksiyon.
   * @description 'sampleKey' anahtarıyla yerel depodan bir değeri alır ve konsola yazdırır.
   */
  public getValue() {
    this.localStorageValue = localStorage.getItem('sampleKey');
    console.log(this.localStorageValue);
  }

  /**
   * Yerel depodan bir değeri silmek için kullanılan fonksiyon.
   * @description 'sampleKey' anahtarındaki değeri yerel depodan siler ve görüntülenen değeri temizler.
   */
  public removeValue() {
    localStorage.removeItem('sampleKey');
    this.localStorageValue = null; // Clear the displayed value
  }
}
