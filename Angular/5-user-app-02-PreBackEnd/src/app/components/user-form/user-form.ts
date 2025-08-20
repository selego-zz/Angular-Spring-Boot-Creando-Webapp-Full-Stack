import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { SharhingDataService } from '../../services/sharhing-data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
})
export class UserFormComponent implements OnInit {
  user: User;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly sharhingDataService: SharhingDataService
  ) {
    this.user = new User();
  }
  ngOnInit(): void {
    this.sharhingDataService.selectedUserEvent.subscribe(
      (newUser) => (this.user = newUser)
    );

    this.route.paramMap.subscribe((params) => {
      const id: number = +(params.get('id') || '-1');

      if (id >= 0) {
        this.sharhingDataService.findUserByIdEvent.emit(id);
      }
    });
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
