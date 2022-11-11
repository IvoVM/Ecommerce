import { CardsService } from './../../services/cards.service';
import { ProductsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.css'],
})
export class CardsGridComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private UndeletableCards: CardsService
  ) {}
  merchCards: any = [];
  cardsInExistance: any = [];
  public loading!: false;
  public searchText: string = '';
  public card: any;

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    // this.cardsInExistance = this.UndeletableCards.cards;
    this.productsService.getAll(1).subscribe((data) => {
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
        Object.assign(a, { quantity: 1, total: a.price,undeleteable:false });
      });
      this.merchCards=this.merchCards.concat(this.UndeletableCards.cards);
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
}


