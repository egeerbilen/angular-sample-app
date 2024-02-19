import { Component } from '@angular/core';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent {
  prototypeSampleCode = `
  interface Prototype {
      clone(): Prototype;
      getInfo(): void;
  }

  class ConcretePrototype implements Prototype {
      private property: string;

      constructor(property: string) {
          this.property = property;
      }

      clone(): Prototype {
          return new ConcretePrototype(this.property);
      }

      getInfo(): void {
          console.log("Property:", this.property);
      }
  }

  class PrototypeManager {
      private prototypeMap: { [key: string]: Prototype } = {};

      registerPrototype(key: string, prototype: Prototype): void {
          this.prototypeMap[key] = prototype;
      }

      getPrototype(key: string): Prototype {
          const prototype = this.prototypeMap[key];
          if (prototype) {
              return prototype.clone();
          }
          return null;
      }
  }

  // Kullanım örneği
  const prototypeManager = new PrototypeManager();

  const prototype1 = new ConcretePrototype('Property 1');
  const prototype2 = new ConcretePrototype('Property 2');

  prototypeManager.registerPrototype('P1', prototype1);
  prototypeManager.registerPrototype('P2', prototype2);

  const clonedPrototype1 = prototypeManager.getPrototype('P1');
  const clonedPrototype2 = prototypeManager.getPrototype('P2');

  clonedPrototype1.getInfo(); // Çıktı: Property: Property 1
  clonedPrototype2.getInfo(); // Çıktı: Property: Property 2

  `;
}
