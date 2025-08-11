import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SharhingDataService {
  private readonly _userEmitter: EventEmitter<User> = new EventEmitter();
  private readonly _removeEvent: EventEmitter<number> = new EventEmitter();

  get userEmitter(): EventEmitter<User> {
    return this._userEmitter;
  }
  get removeEvent(): EventEmitter<number> {
    return this._removeEvent;
  }
}
