import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../../../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-upload',
  templateUrl: './new-upload.component.html',
  styleUrls: ['./new-upload.component.css'],
})
export class NewUploadComponent implements OnInit {
  public form: FormGroup;
  public errorMessage!: string;
  snackbarDurationInSeconds = 5;
  public productTitle = '';
  public productPrice = 0;
  public productImg = '';
  public productDescription = '';
  public productCategory = '';

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      productImg: [''],
      productTitle: [''],
      productPrice: [''],
      productDescription: [''],
      productCategory: [''],
    });
  }

  ngOnInit(): void {}

  public upload() {
    const newProduct = {
      title: this.form.value.productTitle,
      price: this.form.value.productPrice,
      img: this.form.value.productImg,
      description: this.form.value.productDescription,
      category: this.form.value.productCategory,
    };

    this.productsService.create(newProduct).subscribe({
      next: (res) => {
        this.wellSnackBar();
        console.log('subido con exito');
        this.form.reset();
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.errorSnackBar();
      },
    });
  }

  public errorSnackBar() {
    this._snackBar.open(`hubo un error al subir el producto`, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
  public wellSnackBar() {
    this._snackBar.open(`Subido con éxito`, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
}
