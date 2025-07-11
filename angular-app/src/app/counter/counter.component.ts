import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter: number = 0;

  setCounter(): void {
    this.counter++;
  }
}
