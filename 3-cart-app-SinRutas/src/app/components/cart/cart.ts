import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartItemComponent } from '../cart-item/cart-item';

@Component({
  selector: 'cart',
  imports: [CartItemComponent],
  templateUrl: './cart.html',
})
export class CartComponent implements OnChanges {
  @Input() items: CartItem[] = [];
  total: number = 0;
  @Output() addEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() reduceEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
  }

  addProduct(id: number) {
    this.addEventEmitter.emit(id);
  }
  reduceProduct(id: number) {
    this.reduceEventEmitter.emit(id);
  }
  removeProduct(id: number) {
    this.removeEventEmitter.emit(id);
  }
  calculateTotal() {
    this.total = this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }
}
