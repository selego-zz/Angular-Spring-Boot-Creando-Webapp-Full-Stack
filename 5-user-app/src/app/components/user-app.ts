import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userService';
import { UsersComponent } from './users/users';

@Component({
  selector: 'user-app',
  imports: [UsersComponent],
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
}
