import { Component } from '@angular/core';
import { CartAppComponent } from './components/cart-app';

@Component({
  selector: 'app-root',
  imports: [CartAppComponent],
  templateUrl: './app.html',
})
export class App {
  protected title = '3-cart-app';
}
