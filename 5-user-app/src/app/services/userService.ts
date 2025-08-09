import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { MockUsers } from '../Repository/MockUsers';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly users: User[] = MockUsers;

  constructor() {}

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
