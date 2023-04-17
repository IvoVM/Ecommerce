import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

type Product = {
  id: String;
  description: String;
  title: String;
  price: String;
  img: String;
  quantity: Number;
  undeleteable: boolean;
  category: String;
};
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public loading: boolean = true;
  public showMain: boolean = false;
  public showError: boolean = false;
  public logoutError: boolean = false;
  merchCards: Array<Product> = [];
  @ViewChild('loadingScreen') loadingScreen!: ElementRef;

  constructor(
    private productsService: ProductsService,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.productsService.getAll().subscribe({
      next: (res) => {
        this.renderer.addClass(
          this.loadingScreen.nativeElement,
          'loadingScreenClose'
        );
        this.showMain = true;
      },
      error: (err) => {
        this.renderer.addClass(
          this.loadingScreen.nativeElement,
          'loadingScreenClose'
        );
        if ((err.status = 401)) {
          this.showMain = false;
          this.showError = true;
          this.logoutError = true;
        }
      },
    });
  }
}
