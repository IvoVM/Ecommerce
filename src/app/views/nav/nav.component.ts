import { AddCartService } from './../../services/add-cart.service';
import { OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public nombre: any;
  public username?: string;
  public login: boolean = true;
  public menu: boolean = false;

  public cartItems: number = 0;

  @ViewChild('myButton') myButton!: ElementRef;

  constructor(
    private cartService: AddCartService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res.length;
    });

    this.nombre = localStorage.getItem('user');
    if (this.nombre) {
      let name = JSON.parse(this.nombre);
      this.username = name.userName;
    } else {
      this.login = false;
    }
  }
  logout() {
    this.login = false;
    localStorage.removeItem('user');
  }

  showMenu() {
    if (!this.menu) {
      this.renderer.addClass(this.myButton.nativeElement, 'dropdownMenuShow');
      this.menu = true;
    } else {
      this.renderer.removeClass(
        this.myButton.nativeElement,
        'dropdownMenuShow'
      );
      this.menu = false;
    }
  }
}
