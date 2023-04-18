import { ProductsService } from 'src/app/services/products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Product = {
  id: String;
  description: String;
  title: String;
  price: Number;
  img: String;
  quantity: Number;
  undeleteable: boolean;
  category: String;
};
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  products: Array<Product> = [];
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {
    this.ProductsService.getCategory(
      this.ActivatedRoute.snapshot.params['category']
    ).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
    console.log(this.products);
  }
}
