import { CardsService } from './../../services/cards.service';
import { AddCartService } from './../../services/add-cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  public itemsList: any = [];
  public id: any;
  public image: any = 'assets/images/no-img.jpg';
  public a: any;

  public product: any = {
    price: 0,
    title: 'none',
    description: 'none',
    photo: 'none',
  };

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService,
    private CartService: AddCartService,
    private UndeletableCards: CardsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.cargarData(params.variable);
    });
  }
  cargarData(id: number) {
    this.ProductsService.getAll(id).subscribe((res) => {
      this.itemsList = res.concat(this.UndeletableCards.cards);
      this.itemsList.map((a: any, index: number) => {
        if (id === a._id) {
          this.product = a;
          this.product.quantity = 1;
          this.product.total = a.price;
          if (this.product._id.length > 1) {
            this.image = this.product.photo.replace(/&#x2F;/gi, '/');
          } else {
            this.image = this.product.photo;
          }
        }
      });
    });
  }
  public addToCart(data: any) {
    this.CartService.addToCart(data);
  }
}
