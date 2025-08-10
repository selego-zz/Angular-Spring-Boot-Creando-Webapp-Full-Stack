import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
})
export class UserFormComponent {
  @Input() user: User;
  @Output() userEmitter: EventEmitter<User> = new EventEmitter();

  constructor() {
    this.user = new User();
  }
  OnClear(userForm: NgForm) {
    this.user = new User();
    userForm.reset();
    userForm.resetForm();
  }
  OnSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      console.log(this.user);
      this.userEmitter.emit(this.user);
    }
    this.user = new User();
    userForm.reset();
    userForm.resetForm();
  }
}
