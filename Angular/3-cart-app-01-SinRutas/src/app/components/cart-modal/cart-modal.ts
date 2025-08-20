import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart';

@Component({
  selector: 'cart-modal',
  imports: [CartComponent],
  templateUrl: './cart-modal.html',
})
export class CartModalComponent {
  //  @Input() total: number = 0;
  @Input() items: CartItem[] = [];

  @Output() addEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() reduceEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() hideEventEmitter: EventEmitter<number> = new EventEmitter();

  addProduct(id: number) {
    this.addEventEmitter.emit(id);
  }
  reduceProduct(id: number) {
    this.reduceEventEmitter.emit(id);
  }
  removeProduct(id: number) {
    this.removeEventEmitter.emit(id);
  }
  hide(): void {
    this.hideEventEmitter.emit();
  }
}
