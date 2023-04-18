import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  errorMessage: any;
  public form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}
  public register() {
    this.errorMessage = null;
    const body = {
      password: this.form.value.password,
      username: this.form.value.user,
    };

    this.authenticationService.register(body).subscribe({
      next: (res) => {
        console.log(res)
        console.log('register correctamente');
        sessionStorage.setItem('token', JSON.stringify(res.token));
        this.router.navigateByUrl('');
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        console.log('register error');
      },
    });
  }
}
