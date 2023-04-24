import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  public form!: FormGroup;
  public load = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private cookieSvc:CookieService

  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}
  public register() {
    this.load = true;
    const body = {
      username: this.form.value.user,
      password: this.form.value.password,
    };
    console.log(body);

    this.authenticationService.register(body).subscribe({
      next: (res) => {
        console.log('register correctamente');
        this.cookieSvc.set('token',res.token)
        this.router.navigateByUrl('');
        this.load = false;
      },
      error: (error) => {
        this.openSnackBar('Username already taken');
        this.load = false;
        console.log('register error', error);
      },
    });
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Cerrar', {
      duration: 4000,
    });
  }
}
