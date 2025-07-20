import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartItemComponent } from '../cart-item/cart-item';

@Component({
  selector: 'cart',
  imports: [CartItemComponent],
  templateUrl: './cart.html',
})
export class CartComponent {
  @Input() items: CartItem[] = [];
  @Output() addEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() reduceEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  addProduct(id: number) {
    this.addEventEmitter.emit(id);
  }
  reduceProduct(id: number) {
    this.reduceEventEmitter.emit(id);
  }
  removeProduct(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
