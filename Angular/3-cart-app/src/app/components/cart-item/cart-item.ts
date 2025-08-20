import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'tr[cart-item]',
  imports: [],
  templateUrl: './cart-item.html',
})
export class CartItemComponent {
  @Input() item!: CartItem;
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
