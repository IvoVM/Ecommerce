import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

type Product = {
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
export class AddCartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    if (this.cartItemList.includes(product)) {
      this.cartItemList.map((a: any, index: number) => {
        if (product._id === a._id) {
          this.cartItemList[index].quantity =
            this.cartItemList[index].quantity + 1;
        }
      });
    } else {
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((products: Product) => {
      grandTotal = parseInt(products.price);
    });
    return grandTotal;
  }
  deleteCartItem(product: Product) {
    this.cartItemList.map((products: any, index: any) => {
      if (product._id === products._id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
