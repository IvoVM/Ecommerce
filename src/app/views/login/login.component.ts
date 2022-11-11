import { AuthenticationService } from './../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMessage: any;
  public form!: FormGroup;
  snackbarDurationInSeconds = 5;
  public load!: boolean;
  @Input() diameter?: number;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.load = true;
  }

  login() {
    this.load = false;
    this.errorMessage = null;
    const body = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.authenticationService.login(body).subscribe(
      ({ data }) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.authenticationService.user = data;
        this.authenticationService.getLoggedInUser(data.token);
        this.router.navigateByUrl('/main');
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.openSnackBar();
        console.log('login error');
        this.load = true;
      }
    );
  }

  public openSnackBar() {
    this._snackBar.open(`email o contraseña incorrectos`, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
}
