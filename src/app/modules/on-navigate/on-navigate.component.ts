import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-navigate',
  templateUrl: './on-navigate.component.html',
  styleUrls: ['./on-navigate.component.css']
})
export class OnNavigateComponent {
  constructor(private _router: Router) {}

  public navigateToHome() {
    this._router.navigate(['/']);
  }
}
