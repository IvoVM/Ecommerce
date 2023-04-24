import { AddCartService } from '../../../../services/add-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data?: any;
  cart: any[] = [];
  load = true;

  constructor(
    private CartService: AddCartService,
    private _snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = false;
    }, 1000);
  }
  public addToCart(data: any) {
    this.CartService.addToCart(data);
    this.openSnackBar(data.title);
  }

  public openSnackBar(name: string) {
    this._snackBar.open(`El producto ${name} fue agregado al carro`, 'Cerrar', {
      duration: 5000,
    });
  }
}
