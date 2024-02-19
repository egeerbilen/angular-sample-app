import { Component } from '@angular/core';

@Component({
  selector: 'app-builder-pattern',
  templateUrl: './builder-pattern.component.html',
  styleUrls: ['./builder-pattern.component.css']
})
export class BuilderPatternComponent {
  builderSampleCode = ` 
  // Ürün sınıfı
  class Araba {
    marka: string;
    model: string;
    renk: string;
    yil: number;

    constructor(marka: string, model: string, renk: string, yil: number) {
      this.marka = marka;
      this.model = model;
      this.renk = renk;
      this.yil = yil;
    }

    bilgileriGoster() {
      console.log('Marka: {this.marka}, Model: {this.model}, Renk: {this.renk}, Yıl: {this.yil}');
    }
  }

  // Araba oluşturma direktörü
  class ArabaBuilder {
    private marka: string = '';
    private model: string = '';
    private renk: string = '';
    private yil: number = 0;

    setMarka(marka: string) {
      this.marka = marka;
      return this;
    }

    setModel(model: string) {
      this.model = model;
      return this;
    }

    setRenk(renk: string) {
      this.renk = renk;
      return this;
    }

    setYil(yil: number) {
      this.yil = yil;
      return this;
    }

    build() {
      return new Araba(this.marka, this.model, this.renk, this.yil);
    }
  }

  // Kullanım
  const arabaBuilder = new ArabaBuilder();
  const araba = arabaBuilder.setMarka('Toyota').setModel('Corolla').setRenk('Mavi').setYil(2022).build();

  araba.bilgileriGoster(); // Araba bilgilerini göster

`;
}
