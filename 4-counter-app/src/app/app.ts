import { Component } from '@angular/core';
import { CounterComponent } from './components/counter';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.html',
})
export class App {
  protected title = '4-counter-app';
}
