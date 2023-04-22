import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() reInit = new EventEmitter();

  @Input() data: any;
  public form!: FormGroup;
  load = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      username: [],
      img: [],
      description: [],
    });
  }

  ngOnInit(): void {}

  update() {
    this.load = true;
    let body:any = {
      username: this.form.value.username || this.data.username,
      img: this.form.value.img || this.data.img,
      description: this.form.value.description || this.data.description,
      _id: this.data._id,
    };
    this.authenticationService.update(body).subscribe({
      next: (res) => {
        this.openSnackBar('Updated profile');
        console.log('ok',res);
        this.load = false;
        this.reloadPage();
        this.closeEdit()

      },
      error: (err) => {
        this.reloadPage();
        this.openSnackBar('Updated profile');
        this.load = false;
        console.log('err',err);
        this.closeEdit()
      },
    });
  }
  closeEdit() {
    this.close.emit();
  }
  reloadPage(){
    this.reInit.emit();
  }
  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Cerrar', {
      duration: 3000,
    });
  }
}
