import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable ,Output,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface defaultResponse {
  data: any,
  message: string,
  status: number
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  

  getAll(page: number): Observable<any> {
    return this.http.get<defaultResponse>(`${environment.apiUrl}api/products/${page}`).pipe(map((res: defaultResponse) => res.data))
}

  create(body: {title:string,price:number,description: string, photo:string}): Observable<any> {
    return this.http.post(`${environment.apiUrl}api/products/`, body);
  }
  delete(id:string): Observable<any> {
    return this.http.delete<defaultResponse>(`${environment.apiUrl}api/products/${id}`);
  }
  


}
