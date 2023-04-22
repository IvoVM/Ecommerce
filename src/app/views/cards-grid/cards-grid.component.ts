import { ProductsService } from './../../services/products.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

 type Product = {
  id: String;
  description: String;
  title: String;
  price: Number;
  img: String;
  quantity: Number;
  undeleteable: boolean;
  category: String;
}
@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.css'],
})
export class CardsGridComponent implements OnDestroy {
  postSubscription!: Subscription;
  constructor(private productsService: ProductsService) {
    this.getAllProducts();
  }
  merchCards: Array<Product> = [];
  public searchText: string = '';

  public getAllProducts(): void {
    this.postSubscription = this.productsService.getAll().subscribe((data) => {
      this.merchCards = data;
      this.merchCards = this.merchCards.reverse()
    });
  }

  get onSearchProduct() {
    return this.merchCards.filter((merchCard) => {
      return (
        merchCard.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        merchCard.category.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
