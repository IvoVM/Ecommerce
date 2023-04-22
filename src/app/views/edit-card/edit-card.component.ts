// import { ProductsService } from 'src/app/services/products.service';
// import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-edit-card',
//   templateUrl: './edit-card.component.html',
//   styleUrls: ['./edit-card.component.css'],
// })
// export class EditCardComponent implements OnInit {
//   @Output() close = new EventEmitter();
//   @Output() reInit = new EventEmitter();
//   @Input() data: any;
//   public form!: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private ProductsService: ProductsService,
//     private _snackBar: MatSnackBar
//   ) {}

//   ngOnInit(): void {
//     this.form = this.fb.group({
//       title: [],
//       img: [],
//       description: [],
//       price: [],
//       category: [],
//     });
//   }
//   update() {
//     let body = {
//       username: this.form.value.username || this.data.username,
//       img: this.form.value.img || this.data.img,
//       description: this.form.value.description || this.data.description,
//       _id: this.data._id,
//     };
//     this.ProductsService.update(this.data._id,body).subscribe({
//       next: (res) => {
//         this.openSnackBar('Updated profile');
//         console.log('ok', res);
//         this.load = false;
//         this.reloadPage();
//         this.closeEdit();
//       },
//       error: (err) => {
//         this.reloadPage();
//         this.openSnackBar('Updated profile');
//         this.load = false;
//         console.log('err', err);
//         this.closeEdit();
//       },
//     });
//   }
//   closeEdit() {}
// }
