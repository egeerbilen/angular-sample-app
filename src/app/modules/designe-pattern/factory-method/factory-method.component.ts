import { Component } from '@angular/core';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent {
  factoryMethodSampleCode = `
  // Ürün arayüzü
  interface Product {
    operation(): string;
  }

  // ConcreteProduct sınıfları
  class ConcreteProduct1 implements Product {
    operation(): string {
      return 'ConcreteProduct1 ile çalışıyor';
    }
  }

  class ConcreteProduct2 implements Product {
    operation(): string {
      return 'ConcreteProduct2 ile çalışıyor';
    }
  }

  // Creator sınıfı
  abstract class Creator {
    abstract factoryMethod(): Product;

    someOperation(): string {
      const product = this.factoryMethod();
      return 'Creator, ' + product.operation();
    }
  }

  // ConcreteCreator sınıfları
  class ConcreteCreator1 extends Creator {
    factoryMethod(): Product {
      return new ConcreteProduct1();
    }
  }

  class ConcreteCreator2 extends Creator {
    factoryMethod(): Product {
      return new ConcreteProduct2();
    }
  }

  // Kullanım
  const creator1 = new ConcreteCreator1();
  console.log(creator1.someOperation());

  const creator2 = new ConcreteCreator2();
  console.log(creator2.someOperation());
  `;
}
