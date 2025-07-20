import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Product } from '../models/product';
import { CatalogComponent } from './catalog/catalog';
import { CartComponent } from './cart/cart';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'cart-app',
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];
  items: CartItem[] = [];
  constructor(private readonly service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = this.service.getCart();
  }

  addProduct(id: number): void {
    this.service.addProduct(id);
  }

  reduceProduct(id: number) {
    this.service.reduceProduct(id);
  }
  removeProduct(id: number) {
    this.service.removeProduct(id);
  }
}
