import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  private readonly _totalEventEmitter: EventEmitter<number> =
    new EventEmitter();
  private readonly _addEventEmitter: EventEmitter<number> = new EventEmitter();
  private readonly _reduceEventEmitter: EventEmitter<number> =
    new EventEmitter();
  private readonly _removeEventEmitter: EventEmitter<number> =
    new EventEmitter();

  get addEventEmitter() {
    return this._addEventEmitter;
  }
  get reduceEventEmitter() {
    return this._reduceEventEmitter;
  }
  get removeEventEmitter() {
    return this._removeEventEmitter;
  }
  get totalEventEmitter() {
    return this._totalEventEmitter;
  }
}
