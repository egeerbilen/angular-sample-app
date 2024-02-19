import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message = ''; // Define an input property named 'message'
  // @Input('messageAliasName') message = ''; // @Input('messageAliasName') işlevinin parantezleri içindeki takma adı 'messageAliasName' kullanarak bir takma ad atandı

  /**
   * childMethod, üst bileşen tarafından çağrılabilir ve 'Child method executed!' mesajını kaydeder.
   */
  public childMethod(): void {
    // Bu metod, ebeveyn bileşen tarafından çağrılabilir
    console.log('Çocuk metodu çalıştı!');
  }
}
