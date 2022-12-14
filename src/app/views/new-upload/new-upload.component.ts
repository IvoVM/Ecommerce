import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-upload',
  templateUrl: './new-upload.component.html',
  styleUrls: ['./new-upload.component.css'],
})
export class NewUploadComponent implements OnInit {
  public form: FormGroup;
  public errorMessage?: any;
  snackbarDurationInSeconds = 5;
  token?: string;
  public productTitle: string = '';
  public productPrice: number = 0;
  public productImg: string = '';
  public productDescription: string = '';
  public productCategorie: string = '';

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
      productCategorie: [''],
    });
  }

  ngOnInit(): void {}

  public uploadMerchProduct() {
    this.errorMessage = null;
    const newProduct = {
      title: this.form.value.productTitle,
      price: this.form.value.productPrice,
      photo: this.form.value.productImg,
      description: this.form.value.productDescription,
      //categorie:this.productCategorie,
    };
    this.productsService.create(newProduct).subscribe(
      (res) => {
        this.wellSnackBar();
        console.log('subido con exito');
        this.form.reset();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.errorSnackBar();
        console.log('error al subir producto');
      }
    );
  }

  public errorSnackBar() {
    this._snackBar.open(`hubo un error al subir el producto`, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }

  public wellSnackBar() {
    this._snackBar.open(`Subido con ??xito`, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
}
