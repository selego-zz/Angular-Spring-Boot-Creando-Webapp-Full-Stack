import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';
import { selectCounter } from '../store/item.selectors';
import { Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'counter',
  imports: [AsyncPipe],
  templateUrl: './counter.html',
})
export class CounterComponent {
  title: string = 'Counter works';
  contador$: Observable<number>;
  constructor(private readonly store: Store) {
    this.contador$ = this.store.select(selectCounter);
  }

  increment(): void {
    this.store.dispatch(increment()); //ojo: importarlo del items.action
  }
  decrement(): void {
    this.store.dispatch(decrement());
  }
  reset(): void {
    this.store.dispatch(reset());
  }
}
