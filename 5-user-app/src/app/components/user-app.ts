import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userService';
import { UsersComponent } from './users/users';
import { UserFormComponent } from './user-form/user-form';

@Component({
  selector: 'user-app',
  imports: [UsersComponent, UserFormComponent],
  templateUrl: './user-app.html',
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de usuarios';
  users: User[] = [];

  constructor(private readonly service: UserService) {}
  ngOnInit(): void {
    this.service.findAll().subscribe((users) => {
      this.users = users;
    });
  }

  addUser(user: User): void {
    console.log(user);

    user.id =
      this.users?.length > 0
        ? this.users.reduce(
            (prev, current) => (prev.id > current.id ? prev : current),
            this.users[0]
          ).id + 1
        : 0;
    this.users.push(user);
  }

  removeUser(id: number) {
    this.users = this.users.filter((user) => user.id != id);
  }
}
