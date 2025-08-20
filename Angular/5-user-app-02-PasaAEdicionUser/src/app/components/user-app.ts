import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userService';
import Swal from 'sweetalert2';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { SharhingDataService } from '../services/sharhing-data-service';

@Component({
  selector: 'user-app',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './user-app.html',
  styleUrls: ['./user-app.css'],
})
export class UserAppComponent implements OnInit {
  users: User[] = [];

  constructor(
    private readonly router: Router,
    private readonly service: UserService,
    private readonly sharingDataService: SharhingDataService
  ) {}
  ngOnInit(): void {
    this.service.findAll().subscribe((users) => {
      this.users = users;
    });
    this.addUser();
    this.removeUser();
  }

  addUser(): void {
    this.sharingDataService.userEmitter.subscribe((user: User) => {
      console.log(user);

      if (user.id > 0) {
        this.users = this.users.map((oldUser) =>
          oldUser.id == user.id ? { ...user } : oldUser
        );
        this.router.navigate(['/users'], {
          state: { users: this.users },
        });
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
        this.router.navigate(['/users'], {
          state: { users: this.users },
        });
        Swal.fire({
          title: 'Usuario añadido!',
          text: 'Usuario añadido con éxito!',
          icon: 'success',
        });
      }
    });
  }

  removeUser() {
    this.sharingDataService.removeEvent.subscribe((id: number) => {
      this.users = this.users.filter((user) => user.id != id);
      Swal.fire({
        title: 'Usuario eliminado!',
        text: 'Usuario eliminado con éxito!',
        icon: 'success',
      });
      this.router
        .navigate(['/users/create'], { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/users'], {
            state: { users: this.users },
          });
        });
    });
  }
}
