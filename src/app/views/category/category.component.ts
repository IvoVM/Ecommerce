import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  products: Array<Product> = [];
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.ProductsService.getCategory(
      this.ActivatedRoute.snapshot.params['category']
    ).subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
