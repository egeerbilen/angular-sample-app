import { Component } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  strategySampleCode = `
  // Ödeme stratejileri arayüzü
  interface PaymentStrategy {
    pay(amount: number): void;
  }
  
  // Kredi kartıyla ödeme stratejisi
  class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
      console.log('Kredi kartıyla ' + amount + ' tutarında ödeme yapıldı.');
      // Kredi kartı ödeme işlemleri burada gerçekleştirilebilir
    }
  }
  
  // PayPal ile ödeme stratejisi
  class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
      console.log('PayPal ile ' + amount + ' tutarında ödeme yapıldı.');
      // PayPal ödeme işlemleri burada gerçekleştirilebilir
    }
  }
  
  // Satış işlemi sınıfı
  class SalesOrder {
    private paymentStrategy: PaymentStrategy;
  
    constructor(paymentStrategy: PaymentStrategy) {
      this.paymentStrategy = paymentStrategy;
    }
  
    // Ödeme yap methodu
    makePayment(amount: number): void {
      this.paymentStrategy.pay(amount);
    }
  }
  
  // Kullanımı
  const creditCardPayment = new CreditCardPayment();
  const paypalPayment = new PayPalPayment();
  
  const orderWithCreditCard = new SalesOrder(creditCardPayment);
  orderWithCreditCard.makePayment(100);
  
  const orderWithPayPal = new SalesOrder(paypalPayment);
  orderWithPayPal.makePayment(200);
  `;
}
