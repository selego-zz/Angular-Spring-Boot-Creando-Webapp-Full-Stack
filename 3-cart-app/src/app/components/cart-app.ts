import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data';

@Component({
  selector: 'cart-app',
  imports: [RouterOutlet, Navbar],
  templateUrl: './cart-app.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;

  constructor(
    private readonly sharingDataService: SharingDataService,
    private readonly service: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = this.service.getCart();
    this.calculateTotal();

    this.addProduct();
    this.reduceProduct();
    this.removeProduct();
  }

  addProduct(): void {
    this.sharingDataService.addEventEmitter.subscribe((id) => {
      console.log(`Add ${id}`);

      this.items = this.service.addProduct(id);
      this.calculateTotal();
    });
  }

  reduceProduct() {
    this.sharingDataService.reduceEventEmitter.subscribe((id) => {
      this.items = this.service.reduceProduct(id);
      this.calculateTotal();
    });
  }
  removeProduct() {
    this.sharingDataService.removeEventEmitter.subscribe((id) => {
      this.items = this.service.removeProduct(id);
      this.calculateTotal();
    });
  }
  calculateTotal() {
    this.total = this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    this.sharingDataService.totalEventEmitter.emit(this.total);
  }
}
