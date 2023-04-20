import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  closeEdit() {
    this.close.emit();
  }
}
