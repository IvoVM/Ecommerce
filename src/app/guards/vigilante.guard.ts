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
  constructor(private router: Router) {}
  redirect(flag: boolean) {
    if (!flag) {
      console.log('No user specified');
      this.router.navigateByUrl('/login');
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
   let token = sessionStorage.getItem('token');
    if (token === null) {
      this.redirect(false);
    } else {
      return true;
    }
    return false;
  }
}
