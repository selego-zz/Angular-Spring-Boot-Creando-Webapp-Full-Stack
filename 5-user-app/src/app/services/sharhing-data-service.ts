import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SharhingDataService {
  private readonly _userEmitter: EventEmitter<User> = new EventEmitter();
  private readonly _removeEvent: EventEmitter<number> = new EventEmitter();
  private readonly _findUserByIdEvent: EventEmitter<number> =
    new EventEmitter();
  private readonly _selectedUserEvent: EventEmitter<User> = new EventEmitter();

  private readonly _errorsUserFormEventEmitter: EventEmitter<any> =
    new EventEmitter();

  get userEmitter(): EventEmitter<User> {
    return this._userEmitter;
  }
  get removeEvent(): EventEmitter<number> {
    return this._removeEvent;
  }
  get findUserByIdEvent(): EventEmitter<number> {
    return this._findUserByIdEvent;
  }
  get selectedUserEvent(): EventEmitter<User> {
    return this._selectedUserEvent;
  }
  get errorsUserFormEventEmitter(): EventEmitter<any> {
    return this._errorsUserFormEventEmitter;
  }
}
