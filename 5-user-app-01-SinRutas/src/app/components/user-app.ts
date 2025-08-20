import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userService';
import { UsersComponent } from './users/users';
import { UserFormComponent } from './user-form/user-form';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  imports: [UsersComponent, UserFormComponent],
  templateUrl: './user-app.html',
  styleUrls: ['./user-app.css'],
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de usuarios';
  users: User[] = [];
  editingUser: User = new User();
  formOpen: boolean = false;

  constructor(private readonly service: UserService) {}
  ngOnInit(): void {
    this.service.findAll().subscribe((users) => {
      this.users = users;
    });
  }

  addUser(user: User): void {
    console.log(user);

    if (user.id > 0) {
      this.users = this.users.map((oldUser) =>
        oldUser.id == user.id ? { ...user } : oldUser
      );
      Swal.fire({
        title: 'Usuario editado!',
        text: 'Usuario actualizado con éxito!',
        icon: 'success',
      });
    } else {
      user.id =
        this.users?.length > 0
          ? this.users.reduce(
              (prev, current) => (prev.id > current.id ? prev : current),
              this.users[0]
            ).id + 1
          : 0;
      this.users.push(user);
      Swal.fire({
        title: 'Usuario añadido!',
        text: 'Usuario añadido con éxito!',
        icon: 'success',
      });
    }
    this.formOpen = false;
  }

  editUser(user: User) {
    this.formOpen = true;
    this.editingUser = { ...user };
  }

  removeUser(id: number) {
    this.users = this.users.filter((user) => user.id != id);
    Swal.fire({
      title: 'Usuario eliminado!',
      text: 'Usuario eliminado con éxito!',
      icon: 'success',
    });
  }

  setFormOpen() {
    this.formOpen = !this.formOpen;
  }
}
