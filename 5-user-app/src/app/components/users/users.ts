import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'users',
  imports: [],
  templateUrl: './users.html',
})
export class UsersComponent {
  @Input() users: User[] = [];
}
