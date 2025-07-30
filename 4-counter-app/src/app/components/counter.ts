import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
})
export class CounterComponent {
  title: string = 'Counter works';
  contador: number = 0;

  increment(): void {
    this.contador++;
  }
  decrement(): void {
    this.contador--;
  }
  reset(): void {
    this.contador = 0;
  }
}
