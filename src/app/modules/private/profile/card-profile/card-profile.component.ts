import { ProductsService } from '../../../../services/products.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css'],
})
export class CardProfileComponent {
  constructor(private ProductsService: ProductsService) {}
  @Input() data?: any;
  @Output() reInit = new EventEmitter();
  @Output() open = new EventEmitter();

  delete() {
    console.log('delete');
    let sure = window.confirm(
      `Are you sure you want to delete ${this.data.title}?`
    );
    if (sure) {
      this.ProductsService.delete(this.data._id).subscribe({
        next: (res) => {
          this.reInit.emit();
          console.log(res);
        },
        error: (err) => {
          this.reInit.emit();
          console.log(err);
        },
      });
    }
  }
  openEditer(){
    this.open.emit()

  }
}
