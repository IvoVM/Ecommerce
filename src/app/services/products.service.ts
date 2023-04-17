import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface defaultResponse {
  data: any;
  message: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<defaultResponse>(`${environment.apiUrl}products`);
  }
  getOne(id: string | null): Observable<any> {
    return this.http.get<defaultResponse>(
      `${environment.apiUrl}products/${id}`
    );
  }

  create(body: {
    title: string;
    price: number;
    description: string;
    img: string;
    category: string;
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}products/upload`, body);
  }
  delete(id: string): Observable<any> {
    return this.http.delete<defaultResponse>(
      `${environment.apiUrl}products/${id}`
    );
  }
}
