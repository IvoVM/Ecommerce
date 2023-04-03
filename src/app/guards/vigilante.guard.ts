import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  token = localStorage.getItem('token');
  constructor(private router: Router) {}
  redirect(flag: boolean) {
    if (!flag) {
      this.router.navigateByUrl('');
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.token) {
      this.redirect(false);
    } else {
      this.redirect(true);
    }
    return false;
  }
}
