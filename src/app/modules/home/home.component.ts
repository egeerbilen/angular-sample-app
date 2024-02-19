import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  srpCode = `
    class Customer {
      private name: string;
      private email: string;
    
      constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
      }
    
      getName(): string {
        return this.name;
      }
    
      getEmail(): string {
        return this.email;
      }
    }
    
    class CustomerService {
      saveCustomer(customer: Customer): void {
        // Customer kaydetme işlemleri
      }
    
      updateCustomer(customer: Customer): void {
        // Customer güncelleme işlemleri
      }
    }
  `;
  ocpCode = ` 
  type Shape = {
    calculateArea(): number;
  }
  
  class Rectangle implements Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  `;
  lspCode = ` 
  abstract class Vehicle {
    abstract startEngine(): void;
  }
  
  class Car extends Vehicle {
    startEngine(): void {
      console.log('Car engine started');
    }
  }
  
  class ElectricCar extends Vehicle {
    startEngine(): void {
      console.log('Electric car engine started');
    }
  }
  
  `;
  ispCode = ` 
  type Printer = {
    print(): void;
  }
  
  type Scanner = {
    scan(): void;
  }
  
  class AllInOnePrinter implements Printer, Scanner {
    print(): void {
      console.log('Printing...');
    }
  
    scan(): void {
      console.log('Scanning...');
    }
  }
  `;
  dipCode = `
  type Logger = {
    log(message: string): void;
  }
  
  class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log("Log: " + "message");
    }
  }
  
  class ProductService {
    private logger: Logger;
  
    constructor(logger: Logger) {
      this.logger = logger;
    }
  
    saveProduct(): void {
      // Product kaydetme işlemleri
  
      // Loglama
      this.logger.log('Product saved.');
    }
  }
  
  // Kullanım
  const consoleLogger = new ConsoleLogger();
  const productService = new ProductService(consoleLogger);
  productService.saveProduct();
  
  `;
  oopClassAndObject = `
  // Araba sınıfı
  class Araba {
    private marka: string;
    private model: string;
    private yil: number;
  
    constructor(marka: string, model: string, yil: number) {
      this.marka = marka;
      this.model = model;
      this.yil = yil;
    }
  
    bilgileriGoster() {
      console.log("Araba: " + this.marka + " " + this.model + ", Üretim Yılı: " + this.yil);
    }
  }
  
  // Araba sınıfından bir nesne oluşturalım
  const araba1 = new Araba("Toyota", "Corolla", 2020);
  
  // Nesnenin özelliklerini gösterelim
  araba1.bilgileriGoster();
  
  `;
  oopEncapsulation = `
  class Employee {
    private employeeId: number;
    private employeeName: string;
    private employeeSalary: number;
  
    constructor(id: number, name: string, salary: number) {
      this.employeeId = id;
      this.employeeName = name;
      this.employeeSalary = salary;
    }
  
    // Getter ve Setter metodları ile erişim sağlanabilir.
    getSalary(): number {
      return this.employeeSalary;
    }
  
    setSalary(newSalary: number): void {
      this.employeeSalary = newSalary;
    }
  }
  
  // Employee sınıfından bir örnek oluşturulması
  let emp = new Employee(1, "Ahmet", 5000);
  
  // Erişim belirleyicileri sayesinde doğrudan değişkene erişim engellenir
  // emp.employeeName = "Mehmet"; // Bu hata verecektir, çünkü employeeName private olarak tanımlanmıştır.
  
  // Getter ve Setter metotları aracılığıyla erişim sağlanabilir
  console.log(emp.getSalary()); // Çıktı: 5000
  emp.setSalary(6000);
  console.log(emp.getSalary()); // Çıktı: 6000
  
  `;
  oopInheritance = `
  // Ana sınıf (base class)
  class Hayvan {
    private ad: string;

    constructor(ad: string) {
      this.ad = ad;
    }

    sesCikar() {
      console.log("Ses çıkarıyor...");
    }

    bilgiVer() {
      console.log("Bu hayvanın adı " + this.ad);
    }
  }

  // Alt sınıf (derived class)
  class Kedi extends Hayvan {
    constructor(ad: string) {
      super(ad); // Üst sınıfın constructor'ını çağırır
    }

    miyavla() {
      console.log("Miyav!");
    }
  }

  // Kullanım
  const birKedi = new Kedi("Whiskers");
  birKedi.bilgiVer(); // "Bu hayvanın adı Whiskers" çıktısını verecek
  birKedi.miyavla(); // "Miyav!" çıktısını verecek
  birKedi.sesCikar(); // "Ses çıkarıyor..." çıktısını verecek
  `;
  oopPolymorphism = `
  // Ana sınıf
  class Animal {
      name: string;
  
      constructor(name: string) {
          this.name = name;
      }
  
      // Ses çıkarma metodu
      makeSound(): void {
          console.log("Ses çıkarıyor...");
      }
  }
  
  // Alt sınıf (Köpek)
  class Dog extends Animal {
      constructor(name: string) {
          super(name);
      }
  
      // Üst sınıftaki metodu override ediyoruz
      makeSound(): void {
          console.log("Hav hav!");
      }
  }
  
  // Alt sınıf (Kedi)
  class Cat extends Animal {
      constructor(name: string) {
          super(name);
      }
  
      // Üst sınıftaki metodu override ediyoruz
      makeSound(): void {
          console.log("Miyav!");
      }
  }
  
  // Test
  const myDog = new Dog("Karabaş");
  const myCat = new Cat("Boncuk");
  
  myDog.makeSound(); // Çıktı: Hav hav!
  myCat.makeSound(); // Çıktı: Miyav!
  `;
  oopAbstraction = `
  // JavaScript'te soyutlama örneği
    class Device {
      start() {
        throw new Error('Bu metot soyut ve uygulanması gerekiyor.');
      }

      stop() {
        throw new Error('Bu metot soyut ve uygulanması gerekiyor.');
      }
    }

    class TV extends Device {
      start() {
        return 'TV açıldı';
      }

      stop() {
        return 'TV kapatıldı';
      }
    }

    const tv = new TV();
    console.log(tv.start()); // Çıktı: TV açıldı`;

  oopDependencyInjection = `
  // Servis arayüzü
  interface Logger {
      log(message: string): void;
  }

  // Logger servisi
  class ConsoleLogger implements Logger {
      log(message: string): void {
          console.log(message);
      }
  }

  // Bağımlılık enjeksiyonuyla bir sınıf
  class SomeService {
      private logger: Logger;

      constructor(logger: Logger) {
          this.logger = logger;
      }

      doSomething() {
          this.logger.log('Some action executed.');
      }
  }

  // Kullanım
  const logger = new ConsoleLogger(); // Logger'ı oluştur
  const service = new SomeService(logger); // Servisi bağımlılık enjeksiyonuyla oluştur
  service.doSomething(); // İşlemi gerçekleştir
    `;
}
