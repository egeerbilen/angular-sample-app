import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init-child',
  templateUrl: './ng-after-content-init-child.component.html',
  styleUrls: ['./ng-after-content-init-child.component.css']
})
export class NgAfterContentInitChildComponent implements AfterContentInit {
  @ContentChild('contentParagraph', { static: true }) contentParagraph?: ElementRef;

  public ngAfterContentInit() {
    if (this.contentParagraph) {
      console.log('İçerik Paragrafı: ', this.contentParagraph.nativeElement.textContent);
    } else {
      console.log('İçerik paragrafı bulunamadı.');
    }
  }
}
