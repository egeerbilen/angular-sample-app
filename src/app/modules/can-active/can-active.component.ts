import { Component } from '@angular/core';
import { userToken } from 'src/app/enums/token';

import { LoginService } from '../http-request/services/login.service';

@Component({
  selector: 'app-can-active',
  templateUrl: './can-active.component.html',
  styleUrls: ['./can-active.component.css']
})
export class CanActiveComponent {
  constructor(private _loginService: LoginService) {}

  /**
   * "loginStatusChange" fonksiyonu, TypeScript'te bir genel yöntemdir.
   */
  public loginStatusChange() {
    !this._loginService.getToken() ? this._loginService.setToken(userToken) : this._loginService.removeToken();
  }
}
