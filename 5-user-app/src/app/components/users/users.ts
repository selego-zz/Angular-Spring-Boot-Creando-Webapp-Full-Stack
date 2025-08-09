import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'users',
  imports: [],
  templateUrl: './users.html',
})
export class UsersComponent {
  @Input() users: User[] = [];
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  onRemove(id: number) {
    this.removeEvent.emit(id);
  }
}
