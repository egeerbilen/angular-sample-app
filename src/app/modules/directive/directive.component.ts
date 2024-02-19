import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  // Angular Directives, Angular uygulamasının içinde TypeScript veya JavaScript ile kullanılmalıdır.
  // Bu örnek sadece HTML içinde kullanım için basitleştirilmiş bir gösterimdir.

  // Angular bileşeninden sağlanan değerleri alalım (örnek amaçlı, gerçek uygulamada bu bileşenler tarafından sağlanmalıdır).
  isUserLoggedIn = true;
  items = ['Öğe 1', 'Öğe 2', 'Öğe 3'];
  username = 'JohnDoe';
  isActive = true;
  isDisabled = false;
  textColor = 'blue';
  fontSize = 16;
}
