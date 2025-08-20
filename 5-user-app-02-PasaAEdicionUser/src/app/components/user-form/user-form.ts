import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { SharhingDataService } from '../../services/sharhing-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
})
export class UserFormComponent {
  user: User;

  constructor(
    private readonly router: Router,
    private readonly sharhingDataService: SharhingDataService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.user = router.getCurrentNavigation()?.extras.state!['editingUser'];
    } else {
      this.user = new User();
    }
  }

  OnClear(userForm: NgForm) {
    this.user = new User();
    userForm.reset();
    userForm.resetForm();
  }
  OnSubmit(userForm: NgForm): void {
    if (!userForm.valid) return;

    console.log(this.user);
    this.sharhingDataService.userEmitter.emit(this.user);
  }
}
