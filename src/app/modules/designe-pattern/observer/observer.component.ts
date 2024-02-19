import { Component } from '@angular/core';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {
  observerSampleCode = `
  // Gözlemci arayüzü
  interface Observer {
    update(message: any): void;
  }

  // Gözlenen özne sınıfı
  class Subject {
    private observers: Observer[] = [];

    // Gözlemcileri eklemek ve kaldırmak için metodlar
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }

    // Gözlemcilere güncelleme mesajını iletmek için metod
    notify(message: any): void {
      this.observers.forEach(observer => {
        observer.update(message);
      });
    }
  }

  // Gerçekleştirilecek gözlemci sınıflarından biri
  class ConcreteObserver implements Observer {
    update(message: any): void {
      console.log('Yeni mesaj alındı: ' + message);
    }
  }

  // Örnek kullanım
  const subject = new Subject();

  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();

  subject.addObserver(observer1);
  subject.addObserver(observer2);

  subject.notify("Merhaba! Bu bir bildirim.");

  subject.removeObserver(observer2);

  subject.notify("İkinci bildirim!");

  `;
}
