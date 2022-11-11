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
  public id: any;
  public respuesta: any;
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


  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.cargarData(params.variable);
    });
  }
  cargarData(id: number) {
    this.ProductsService.getAll(id).subscribe((res) => {
      res.map((a: any, index: number) => {
        if (id === a._id) {
          this.product = a;
          this.product.quantity=1;
          this.product.photo=this.product.photo.replace(/&#x2F;/gi, '/');
          this.product.total=a.price
          this.image = this.product.photo
        }
      });
    });
  }
  public addToCart(data: any) {
    this.CartService.addToCart(data);
  }
  public deleteProduct(): void {
    this.ProductsService.delete(this.product._id).subscribe();
    console.log('borrado');
  }
}
