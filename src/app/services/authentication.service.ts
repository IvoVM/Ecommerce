import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import {HttpClientModule} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: any;
  auth_token:string= '';


  constructor(private http: HttpClient) { }

  login(body: any): Observable<any> {
    return this.http.post(environment.apiUrl + 'api/auth/login', body);
  }

  register(body:any):Observable<any>{
    return this.http.post(environment.apiUrl + 'api/auth/register', body);

  } 
  getLoggedInUser(auth_token:String): Object {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(environment.apiUrl, { headers: headers })
  }

  
}
