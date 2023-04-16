import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  token!: string | null;

  constructor(private AuthenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.AuthenticationService.getLoggedInUser(this.token).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
