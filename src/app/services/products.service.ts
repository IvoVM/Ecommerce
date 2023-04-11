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

  create(body: {
    title: string;
    price: number;
    description: string;
    img: string;
    categorie: string;
  }): Observable<any> {
    return this.http.post(`${environment.apiUrl}products`, body);
  }
  delete(id: string): Observable<any> {
    return this.http.delete<defaultResponse>(
      `${environment.apiUrl}api/products/${id}`
    );
  }
}
