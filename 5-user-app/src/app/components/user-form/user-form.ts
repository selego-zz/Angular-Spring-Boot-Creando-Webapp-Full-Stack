import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
})
export class UserFormComponent {
  @Output() userEmitter: EventEmitter<User> = new EventEmitter();

  user: User;

  constructor() {
    this.user = new User();
  }

  OnSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      console.log(this.user);
      this.userEmitter.emit(this.user);
    }
    userForm.reset();
    userForm.resetForm();
  }
}
