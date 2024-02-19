import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolving-dynamic-data',
  templateUrl: './resolving-dynamic-data.component.html',
  styleUrls: ['./resolving-dynamic-data.component.css']
})
export class ResolvingDynamicDataComponent implements OnInit {
  resolvedData: any = [];
  constructor(private _route: ActivatedRoute) {}

  /**
   * TypeScript'te `ngOnInit` fonksiyonu, rota verilerine abone olur ve çözülen veriyi bir sınıf özelliğine atar.
   */
  public ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.resolvedData = data['resolvedData']; // Access resolved data here
    });
  }
}
