import { Component } from '@angular/core';

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.component.html',
  styleUrls: ['./chain-of-responsibility.component.css']
})
export class ChainOfResponsibilityComponent {
  chainOfResponsibility = `
  // Taleplerin işleneceği temel sınıf
  abstract class Handler {
      protected successor: Handler | null = null;

      setSuccessor(successor: Handler): void {
          this.successor = successor;
      }

      handleRequest(request: number): void {
          if (this.successor !== null) {
              this.successor.handleRequest(request);
          }
      }
  }

  // İşlemi gerçekleştiren sınıflar
  class ConcreteHandler1 extends Handler {
      handleRequest(request: number): void {
          if (request >= 0 && request < 10) {
              console.log("ConcreteHandler1 işlemi gerçekleştirdi: " + request);
          } else if (this.successor !== null) {
              this.successor.handleRequest(request);
          }
      }
  }

  class ConcreteHandler2 extends Handler {
      handleRequest(request: number): void {
          if (request >= 10 && request < 20) {
              console.log("ConcreteHandler2 işlemi gerçekleştirdi: " + request);
          } else if (this.successor !== null) {
              this.successor.handleRequest(request);
          }
      }
  }

  class ConcreteHandler3 extends Handler {
      handleRequest(request: number): void {
          if (request >= 20 && request < 30) {
              console.log("ConcreteHandler3 işlemi gerçekleştirdi: " + request);
          } else if (this.successor !== null) {
              this.successor.handleRequest(request);
          }
      }
  }

  // Örnek kullanım
  const handler1 = new ConcreteHandler1();
  const handler2 = new ConcreteHandler2();
  const handler3 = new ConcreteHandler3();

  handler1.setSuccessor(handler2);
  handler2.setSuccessor(handler3);

  // Talepleri işle
  handler1.handleRequest(5);
  handler1.handleRequest(15);
  handler1.handleRequest(25);
  handler1.handleRequest(35);

  `;
}
