import { AddCartService } from './../../services/add-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public newProduct: boolean = true;
  @Input() data?: any;
  cart: any[] = [];

  constructor(
    private productSvc: ProductsService,
    private CartService: AddCartService
  ) {}

  ngOnInit(): void {}
  public addToCart(data: any) {
    this.CartService.addToCart(data);
  }
  public deleteProduct(): void {
    this.productSvc.delete(this.data._id).subscribe();
    console.log('borrado');
  }
}
