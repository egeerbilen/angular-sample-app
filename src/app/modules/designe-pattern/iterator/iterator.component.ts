import { Component } from '@angular/core';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.css']
})
export class IteratorComponent {
  iteratorSampleCode = `
  // Iterable interface'i oluşturuluyor
  interface IterableCollection<T> {
    createIterator(): Iterator<T>;
  }

  // Iterator interface'i oluşturuluyor
  interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
  }

  // IterableCollection'ı implement eden bir sınıf oluşturuyoruz
  class NumbersCollection implements IterableCollection<number> {
    private numbers: number[];

    constructor() {
      this.numbers = [];
    }

    // NumbersCollection'a eleman eklemek için bir metot
    addNumber(num: number): void {
      this.numbers.push(num);
    }

    // Iterator oluşturma metodu
    createIterator(): Iterator<number> {
      return new NumbersIterator(this.numbers);
    }
  }

  // Iterator'ı implement eden bir sınıf oluşturuyoruz
  class NumbersIterator implements Iterator<number> {
    private index: number = 0;
    private numbers: number[];

    constructor(numbers: number[]) {
      this.numbers = numbers;
    }

    // Sonraki elemanı getiren metot
    next(): number {
      const number = this.numbers[this.index];
      this.index++;
      return number;
    }

    // Sonraki elemanın olup olmadığını kontrol eden metot
    hasNext(): boolean {
      return this.index < this.numbers.length;
    }
  }

  // Kullanım örneği
  const numbersCollection = new NumbersCollection();
  numbersCollection.addNumber(1);
  numbersCollection.addNumber(2);
  numbersCollection.addNumber(3);

  const iterator = numbersCollection.createIterator();

  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  `;
}
