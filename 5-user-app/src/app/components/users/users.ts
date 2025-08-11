import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'users',
  imports: [RouterModule],
  templateUrl: './users.html',
})
export class UsersComponent {
  @Input() users: User[] = [];
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();
  @Output() editEvent: EventEmitter<User> = new EventEmitter();

  title: string = 'Listado de usuarios';

  onEdit(editingUser: User) {
    this.editEvent.emit(editingUser);
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
        this.removeEvent.emit(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}
