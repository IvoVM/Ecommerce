import { AuthenticationService } from './../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  @Input() diameter: number = 40;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.load = true;
  }
  // login() {
  //   const data = {
  //     email: this.form.value.email,
  //     password: this.form.value.password,
  //   };
  //   this.noServer(data);
    
  // }

  login() {
    this.load = false;
    this.errorMessage = null;
    const body = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.authenticationService.login(body).subscribe({
      next: (res) => {
        console.log(res)
        sessionStorage.setItem('token', JSON.stringify(res.token));
        this.authenticationService.getLoggedInUser(res.token);
        this.router.navigateByUrl('/main');
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.openSnackBar();
        this.load = true;
      },
    });
  }
  public openSnackBar() {
    this._snackBar.open(`email o contraseña incorrectos`, 'Cerrar', {
      duration: this.snackbarDurationInSeconds * 1000,
    });
  }
  // private noServer(data:any){
  //   console.log(typeof data)
  //   localStorage.setItem('user', JSON.stringify(data));
  //   this.load = false;
  //   this.errorMessage = null;
  //   this.router.navigateByUrl('/main');
  // }
}
