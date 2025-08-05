import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartItemComponent } from '../cart-item/cart-item';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItems, selectTotal } from '../../store/items.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'cart',
  imports: [CartItemComponent, AsyncPipe],
  templateUrl: './cart.html',
})
export class CartComponent {
  items$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(
    private readonly sharingDataService: SharingDataService,
    private readonly router: Router,
    private readonly store: Store
  ) {
    this.items$ = this.store.select(selectItems);
    this.total$ = this.store.select(selectTotal);
  }
  addProduct(id: number) {
    this.sharingDataService.addEventEmitter.emit(id);
  }
  reduceProduct(id: number) {
    this.sharingDataService.reduceEventEmitter.emit(id);
  }
  removeProduct(id: number) {
    this.sharingDataService.removeEventEmitter.emit(id);
  }
}
