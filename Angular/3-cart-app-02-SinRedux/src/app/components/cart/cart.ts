import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartItemComponent } from '../cart-item/cart-item';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data';

@Component({
  selector: 'cart',
  imports: [CartItemComponent],
  templateUrl: './cart.html',
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total: number = 0;

  constructor(
    private readonly sharingDataService: SharingDataService,
    private readonly router: Router
  ) {
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }
  ngOnInit(): void {
    this.getTotal();
  }

  getTotal() {
    this.sharingDataService.totalEventEmitter.subscribe((total) => {
      this.total = total;
    });
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
