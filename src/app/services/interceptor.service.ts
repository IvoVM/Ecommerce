import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let mytoken: any = sessionStorage.getItem('token');
    let request = req;

    if (mytoken) {
      mytoken = JSON.parse(mytoken);
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${mytoken}`,
        },
      });
    }

    return next.handle(request);
  }
}
