import { AddCartService } from './../../services/add-cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-personal-cart',
  templateUrl: './personal-cart.component.html',
  styleUrls: ['./personal-cart.component.css'],
})
export class PersonalCartComponent implements OnInit {
  public products: Array<any> = [];
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
    item.quantity = item.quantity - 1;
    this.grandTotal = this.cartService.getTotalPrice();
    this.taxes = this.grandTotal * 0.05;
  }

  plus(item: any) {
    item.quantity = item.quantity + 1;
    this.grandTotal = this.cartService.getTotalPrice();
    this.taxes = this.grandTotal * 0.05;
  }
}
