import { Component } from '@angular/core';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})
export class FacadeComponent {
  facedeSampleCode = `
  // Alt sistemler
  class SubSystemA {
    operationA(): string {
      return 'Alt sistem A çalışıyor';
    }
  }

  class SubSystemB {
    operationB(): string {
      return 'Alt sistem B çalışıyor';
    }
  }

  class SubSystemC {
    operationC(): string {
      return 'Alt sistem C çalışıyor';
    }
  }

  // Facade
  class Facade {
    private subsystemA: SubSystemA;
    private subsystemB: SubSystemB;
    private subsystemC: SubSystemC;

    constructor() {
      this.subsystemA = new SubSystemA();
      this.subsystemB = new SubSystemB();
      this.subsystemC = new SubSystemC();
    }

    operation(): string {
      let result = 'Facade başlatılıyor:';
      result += this.subsystemA.operationA() + ' ';
      result += this.subsystemB.operationB() + ' ';
      result += this.subsystemC.operationC();
      return result;
    }
  }

  // Kullanım
  const facade = new Facade();
  const result = facade.operation();
  console.log(result);

  `;
}
