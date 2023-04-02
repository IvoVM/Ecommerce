import { CardsService } from './../../services/cards.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.css'],
})
export class CardsGridComponent implements OnInit, OnDestroy {
  postSubscription!: Subscription;
  constructor(
    private productsService: ProductsService,
    private UndeletableCards: CardsService
  ) {}
  merchCards: any = [];
  cardsInExistance: any = [];
  private loading!: false;
  public searchText: any = '';
  private card: any;

  ngOnInit(): void {
    this.getAllProducts();
    this.merchCards = this.merchCards.concat(this.UndeletableCards.cards);
  }

  public getAllProducts(): void {
    this.postSubscription = this.productsService.getAll(1).subscribe((data) => {
      this.merchCards = data.map(
        (e: {
          photo: string;
          description: string;
          title: string;
          price: number;
          categorie: string;
        }) => {
          e.photo = e.photo.replace(/&#x2F;/gi, '/');
          return e;
        }
      );
      this.merchCards.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price, undeleteable: false });
      });
      console.log(this.merchCards);
    });
  }

  get onSearchProduct() {
    return this.merchCards.filter(
      (merchCard: { title: string; description: string }) => {
        return (
          merchCard.title
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          merchCard.description
            .toLowerCase()
            .includes(this.searchText.toLowerCase())
        );
      }
    );
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
