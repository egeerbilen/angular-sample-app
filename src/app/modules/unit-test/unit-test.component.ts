import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css']
})
export class UnitTestComponent {
  inputText = '';
  convertedText = '';
  notes: string[] = [
    'Bugün hava çok güzel!',
    'Alışveriş listesi: süt, ekmek, yumurta',
    "Yarınki randevu saat 14:00'te.",
    'İleri seviye JavaScript öğrenmeliyim.',
    "En sevdiğim şarkı: 'Bohemian Rhapsody'"
  ];

  /**
   * Constructor içinde çağrılan fonksiyon. İki sayıyı çarpar.
   * @param a Çarpılan ilk sayı
   * @param b Çarpılan ikinci sayı
   * @returns İki sayının çarpımı
   */
  constructor() {
    this.multiply(1, 2);
  }

  /**
   * İki sayıyı çarpan fonksiyon.
   * @param a Çarpılan ilk sayı
   * @param b Çarpılan ikinci sayı
   * @returns İki sayının çarpımı
   */
  public multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Giriş metnini büyük harfe dönüştüren fonksiyon.
   */
  public convertToUppercase(): void {
    this.convertedText = this.inputText.toUpperCase();
  }

  /**
   * Not eklemek için kullanılan fonksiyon.
   * @param note Eklenen not
   */
  public addNote(note: string): void {
    this.notes.push(note);
  }

  /**
   * Belirtilen indeksteki notu silen fonksiyon.
   * @param index Silinecek notun indeksi
   */
  public removeNote(index: number): void {
    this.notes.splice(index, 1);
  }
}
