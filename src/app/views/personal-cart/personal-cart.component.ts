import { AddCartService } from './../../services/add-cart.service';
import { Component, OnInit } from '@angular/core';

type Product = {
  id: String;
  description: String;
  title: String;
  price: number;
  img: String;
  quantity: number;
  undeleteable: boolean;
  category: String;
};
@Component({
  selector: 'app-personal-cart',
  templateUrl: './personal-cart.component.html',
  styleUrls: ['./personal-cart.component.css'],
})
export class PersonalCartComponent implements OnInit {
  public products: Array<Product> = [];
  public grandTotal!: number;
  public taxes: number = 0;

  constructor(private cartService: AddCartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.taxes = this.grandTotal * 0.05;
    });
  }

  removeItem(item: any) {
    this.cartService.deleteCartItem(item);
  }

  removeAllCart() {
    this.cartService.removeAllCart();
  }

  minus(item: any) {
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
      this.grandTotal = this.cartService.getTotalPrice();
      this.taxes = this.grandTotal * 0.05;
    }
  }

  plus(item: any) {
    item.quantity = item.quantity + 1;
    this.grandTotal = this.cartService.getTotalPrice();
    this.taxes = this.grandTotal * 0.05;
  }
}
