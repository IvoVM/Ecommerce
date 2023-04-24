import {
  AuthenticationService,
  User,
} from '../../../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private cookieSvc: CookieService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.load = true;
    this.openSnackBar('you need to have an account to access that route ');
  }

  login() {
    this.load = false;
    this.errorMessage = null;
    const body: User = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.authenticationService.login(body).subscribe({
      next: (res) => {
        console.log(res);
        this.cookieSvc.set('token', res.token);
        this.authenticationService.getLoggedInUser();
        this.router.navigateByUrl('');
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.openSnackBar(`The username or password are incorrect`);
        this.load = true;
      },
    });
  }
  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
}
