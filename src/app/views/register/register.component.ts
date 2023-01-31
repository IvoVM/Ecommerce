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
      email: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }
  public register() {
    this.errorMessage = null;
    const body = {
      email: this.form.value.email,
      password: this.form.value.password,
      userName: this.form.value.user,
    };
    
    this.authenticationService.register(body).subscribe({
      next: (res) => {
        console.log('register correctamente');
        this.authenticationService.user = res;
        this.router.navigateByUrl('/main');
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        console.log('register error');
      },
    });
  }
}
