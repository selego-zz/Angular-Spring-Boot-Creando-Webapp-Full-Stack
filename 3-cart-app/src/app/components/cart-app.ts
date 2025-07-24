import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Product } from '../models/product';
import { CatalogComponent } from './catalog/catalog';
import { CartComponent } from './cart/cart';
import { CartItem } from '../models/cartItem';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'cart-app',
  imports: [CatalogComponent, CartComponent, Navbar],
  templateUrl: './cart-app.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;
  showCart: boolean = true;

  constructor(private readonly service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = this.service.getCart();
    this.calculateTotal();
  }

  addProduct(id: number): void {
    this.service.addProduct(id);
    this.calculateTotal();
  }

  reduceProduct(id: number) {
    this.service.reduceProduct(id);
    this.calculateTotal();
  }
  removeProduct(id: number) {
    this.service.removeProduct(id);
    this.calculateTotal();
  }
  calculateTotal() {
    this.total = this.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }
}
