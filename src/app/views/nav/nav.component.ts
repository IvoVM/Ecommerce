import { AddCartService } from './../../services/add-cart.service';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public cartItems: number = 0;
  constructor(private cartService: AddCartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res.length;
    });
  }
}
