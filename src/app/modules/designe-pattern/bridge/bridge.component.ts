import { Component } from '@angular/core';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent {
  bridgeSampleCode = `
  // Uygulamanın soyut kısmı
  interface DrawingAPI {
      drawCircle(x: number, y: number, radius: number): void;
  }
  
  // Soyut kısmın somutlaştırıldığı uygulama
  class DrawingAPI1 implements DrawingAPI {
      drawCircle(x: number, y: number, radius: number): void {
          console.log('API1.circle at {x}:{y} - radius: {radius}');
      }
  }
  
  class DrawingAPI2 implements DrawingAPI {
      drawCircle(x: number, y: number, radius: number): void {
          console.log('API2.circle at {x}:{y} - radius: {radius}');
      }
  }
  
  // Şekil soyutlaması
  abstract class Shape {
      protected drawingAPI: DrawingAPI;
  
      constructor(drawingAPI: DrawingAPI) {
          this.drawingAPI = drawingAPI;
      }
  
      abstract draw(): void;
      abstract resizeByPercentage(percentage: number): void;
  }
  
  // Şekillerin somutlaştırılması
  class CircleShape extends Shape {
      private x: number;
      private y: number;
      private radius: number;
  
      constructor(x: number, y: number, radius: number, drawingAPI: DrawingAPI) {
          super(drawingAPI);
          this.x = x;
          this.y = y;
          this.radius = radius;
      }
  
      draw(): void {
          this.drawingAPI.drawCircle(this.x, this.y, this.radius);
      }
  
      resizeByPercentage(percentage: number): void {
          this.radius *= percentage / 100;
      }
  }
  
  // Kullanım
  const api1 = new DrawingAPI1();
  const api2 = new DrawingAPI2();
  
  const circle1 = new CircleShape(1, 2, 3, api1);
  circle1.draw();
  circle1.resizeByPercentage(50);
  circle1.draw();
  
  const circle2 = new CircleShape(5, 7, 11, api2);
  circle2.draw();
  circle2.resizeByPercentage(200);
  circle2.draw();
    `;
}
