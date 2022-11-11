import { AddCartService } from './../../services/add-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // @ViewChild ('#asCart', {static : false}) cart!:any;
  public newProduct: boolean = true;
  @Input() data?: any;
  cart: any[] = [];

  constructor(
    private renderer2: Renderer2,
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
