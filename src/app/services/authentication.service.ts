import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User  {
  username: string;
  password: string;
  img?: string;
  description?: string;
  _id?: string;
};
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(body: User): Observable<any> {
    return this.http.post(environment.apiUrl + 'signin', body);
  }

  register(body: User): Observable<any> {
    return this.http.post(environment.apiUrl + 'signup', body);
  }

  getLoggedInUser(): Observable<any> {
    return this.http.get(environment.apiUrl + 'me');
  }

  update(body: User): Observable<any> {
    return this.http.put(environment.apiUrl + 'me', body);
  }
}
