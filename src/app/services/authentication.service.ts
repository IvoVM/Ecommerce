import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(body: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'signin', body);
  }

  register(body: { username: string; password: string }): Observable<any> {
    return this.http.post(environment.apiUrl + 'signup', body);
  }

  getLoggedInUser(): Observable<any> {
    return this.http.get(environment.apiUrl + 'me');
  }
}
