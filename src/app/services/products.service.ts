import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface defaultResponse {
  data: any;
  message: string;
  status: number;
}
export type Product = {
  title: string;
  price: string;
  description: string;
  img: string;
  category: string;
  userIMG?: string;
  userID?: string;
  _id?: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<defaultResponse>(`${environment.apiUrl}products`);
  }
  getCategory(category: string | null): Observable<any> {
    return this.http.get<defaultResponse>(
      `${environment.apiUrl}category/${category}`
    );
  }
  getOne(id: string | null): Observable<any> {
    return this.http.get<defaultResponse>(
      `${environment.apiUrl}products/${id}`
    );
  }
  getUserProducts(): Observable<any> {
    return this.http.get<defaultResponse>(
      `${environment.apiUrl}products/profile`
    );
  }

  create(body: Product): Observable<any> {
    return this.http.post(`${environment.apiUrl}products/upload`, body);
  }
  update(id: string, body: Product) {
    return this.http.put(`${environment.apiUrl}products/${id}`, body);
  }
  delete(id: string): Observable<any> {
    return this.http.delete<defaultResponse>(
      `${environment.apiUrl}products/${id}`
    );
  }
}
