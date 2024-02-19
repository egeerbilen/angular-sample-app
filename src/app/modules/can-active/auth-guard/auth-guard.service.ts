import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../../http-request/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) {}

  /**
   * The canActivate function checks if the user has the required authorization to access a specific
   * route and either grants access or redirects to an unauthorized page.
   * @param {ActivatedRouteSnapshot} next - The next parameter represents the next state of the route,
   * while the state parameter represents the current state of the route.
   * @param {RouterStateSnapshot} state - The `state` parameter represents the current state of the
   * router, including the URL and any query parameters. It is of type `RouterStateSnapshot`.
   * @returns The canActivate method returns either a boolean value, a UrlTree object, or an Observable
   * or Promise that resolves to a boolean value or UrlTree object.
   */
  public canActivate(
    // Örneğin, next parametresi, rotanın bir sonraki durumunu temsil eder. state ise rotanın anlık durumunu yansıtır.
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Örnek bir kontrol: Eğer rotanın verisinde özel bir izin gerekiyorsa
    if (!this._loginService.getToken()) {
      // Özel izni yoksa yetkisiz sayfasına yönlendir
      return this._router.navigate(['404']);
    } else {
      // Özel izne sahipse rotaya erişime izin ver
      return true;
    }
  }

  /**
   * The `canActivateChild` function returns the result of the `canActivate` function.
   * @param {ActivatedRouteSnapshot} childRoute - The childRoute parameter is an ActivatedRouteSnapshot
   * object that represents the route that is being activated for a child component. It contains
   * information about the route, such as the URL segments, route parameters, and query parameters.
   * @param {RouterStateSnapshot} state - The `state` parameter in the `canActivateChild` method is of
   * type `RouterStateSnapshot`. It represents the state of the router at the time the guard is called.
   * It contains information about the current URL, query parameters, and other relevant data.
   * @returns The `canActivateChild` method is returning the result of the `canActivate` method.
   */
  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
