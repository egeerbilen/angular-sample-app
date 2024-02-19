import { Component } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent {
  decoratorSampleCode = `
  // Temel Araba arabasını temsil eden arayüz veya sınıf
  interface Araba {
    ozellikleriGoster(): void;
  }

  // Temel Araba sınıfı
  class TemelAraba implements Araba {
    ozellikleriGoster(): void {
      console.log("Bu araba modeli: Temel Araba");
    }
  }

  // Decorator sınıfı
  abstract class ArabaDecorator implements Araba {
    protected decoratedAraba: Araba;

    constructor(araba: Araba) {
      this.decoratedAraba = araba;
    }

    ozellikleriGoster(): void {
      this.decoratedAraba.ozellikleriGoster();
    }
  }

  // Decoratorları genişleten konkret sınıflar

  class SpoilerDecorator extends ArabaDecorator {
    constructor(araba: Araba) {
      super(araba);
    }

    ozellikleriGoster(): void {
      super.ozellikleriGoster();
      console.log("Spoiler eklendi!");
    }
  }

  class TurboDecorator extends ArabaDecorator {
    constructor(araba: Araba) {
      super(araba);
    }

    ozellikleriGoster(): void {
      super.ozellikleriGoster();
      console.log("Turbo eklendi!");
    }
  }

  // Kullanım

  let temelAraba: Araba = new TemelAraba();
  let arabaWithSpoiler: Araba = new SpoilerDecorator(temelAraba);
  let arabaWithTurboAndSpoiler: Araba = new TurboDecorator(new SpoilerDecorator(temelAraba));

  console.log("Temel Araba:");
  temelAraba.ozellikleriGoster();

  console.log("Araba with Spoiler:");
  arabaWithSpoiler.ozellikleriGoster();

  console.log("Araba with Turbo and Spoiler:");
  arabaWithTurboAndSpoiler.ozellikleriGoster();

  `;
}
