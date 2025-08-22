import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/userService';
import { SharhingDataService } from '../../services/sharhing-data-service';

@Component({
  selector: 'users',
  imports: [RouterModule],
  templateUrl: './users.html',
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  title: string = 'Listado de usuarios';

  constructor(
    private readonly router: Router,
    private readonly service: UserService,
    private readonly sharingDataService: SharhingDataService
  ) {}
  ngOnInit(): void {
    if (!this.users || this.users.length < 1) {
      this.service.findAll().subscribe((users) => {
        this.users = users;
      });
    }
  }

  onEdit(editingUser: User) {
    this.router.navigate(['/users/edit', editingUser.id]);
  }

  onRemove(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.sharingDataService.removeEvent.emit(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}
