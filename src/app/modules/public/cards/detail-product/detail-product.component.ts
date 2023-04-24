import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent {
  product;

  constructor(private ActivatedRoute: ActivatedRoute) {
    this.product = this.ActivatedRoute.snapshot.data['product'];
  }

  addToCart(a: any) {}
}
