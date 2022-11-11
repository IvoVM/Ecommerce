import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')!);
    let request = req;

    if (user) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ user.token }`
        }
      });
    }

    return next.handle(request);
  }

}