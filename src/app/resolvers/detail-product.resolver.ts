import { ProductsService } from 'src/app/services/products.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DetailProductResolverService implements Resolve<any> {
  constructor(private ProductsService: ProductsService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.ProductsService.getOne(route.paramMap.get('id')).pipe(
      catchError((error) => {
        alert('Error receiving detail-product data, check your internet connection and try again.');
        console.log(error);
        return of();
      })
    );
  }
}
