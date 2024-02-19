import { Component } from '@angular/core';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent {
  abstractFactorySampleCode = ` 
  // Araba interface'ini tanımlayalım
  interface Araba {
    marka: string;
    model: string;
    fiyat: number;
  }
  
  // Sedan Araba sınıfı
  class Sedan implements Araba {
    marka: string;
    model: string;
    fiyat: number;
  
    constructor(marka: string, model: string, fiyat: number) {
      this.marka = marka;
      this.model = model;
      this.fiyat = fiyat;
    }
  }
  
  // Hatchback Araba sınıfı
  class Hatchback implements Araba {
    marka: string;
    model: string;
    fiyat: number;
  
    constructor(marka: string, model: string, fiyat: number) {
      this.marka = marka;
      this.model = model;
      this.fiyat = fiyat;
    }
  }
  
  // Abstract Factory
  interface ArabaFactory {
    createSedan(): Araba;
    createHatchback(): Araba;
  }
  
  // FordFactory, ArabaFactory arayüzünü uygulayan bir fabrika
  class FordFactory implements ArabaFactory {
    createSedan(): Araba {
      return new Sedan('Ford', 'Focus', 200000);
    }
  
    createHatchback(): Araba {
      return new Hatchback('Ford', 'Fiesta', 180000);
    }
  }
  
  // ToyotaFactory, ArabaFactory arayüzünü uygulayan bir fabrika
  class ToyotaFactory implements ArabaFactory {
    createSedan(): Araba {
      return new Sedan('Toyota', 'Corolla', 220000);
    }
  
    createHatchback(): Araba {
      return new Hatchback('Toyota', 'Yaris', 190000);
    }
  }
  
  // Kullanımı
  const fordFabrikasi: ArabaFactory = new FordFactory();
  const toyotaFabrikasi: ArabaFactory = new ToyotaFactory();
  
  const fordSedan = fordFabrikasi.createSedan();
  const fordHatchback = fordFabrikasi.createHatchback();
  
  const toyotaSedan = toyotaFabrikasi.createSedan();
  const toyotaHatchback = toyotaFabrikasi.createHatchback();
  
  console.log('Ford Sedan:', fordSedan); // Ford Sedan: Sedan { marka: 'Ford', model: 'Focus', fiyat: 200000 }
  console.log('Ford Hatchback:', fordHatchback); // Ford Hatchback: Hatchback { marka: 'Ford', model: 'Fiesta', fiyat: 180000 }
  console.log('Toyota Sedan:', toyotaSedan); // Toyota Sedan: Sedan { marka: 'Toyota', model: 'Corolla', fiyat: 220000 }
  console.log('Toyota Hatchback:', toyotaHatchback); // Toyota Hatchback: Hatchback { marka: 'Toyota', model: 'Yaris', fiyat: 190000 }
  `;
}
