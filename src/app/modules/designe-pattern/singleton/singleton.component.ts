import { Component } from '@angular/core';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
  singletonSampleCode = `
  class Singleton {
    private static instance: Singleton;
  
    private constructor() {
      // Private constructor to prevent instantiation outside the class
    }
  
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    public someMethod() {
      console.log("Singleton method called");
    }
  }
  
  // Kullanım
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // true, aynı instance
  
  instance1.someMethod(); // "Singleton method called"
  instance2.someMethod(); // "Singleton method called"
  `;
}
