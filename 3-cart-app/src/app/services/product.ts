import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  nombreStorage: string = 'carritoDeLaCompra';
  cart: CartItem[] = [];

  constructor() {
    const data = sessionStorage.getItem(this.nombreStorage);
    this.cart = data ? JSON.parse(data) : [];
  }

  findAll(): Product[] {
    return products;
  }
  getCart(): CartItem[] {
    return this.cart;
  }

  addProduct(id: number): void {
    const elemet = this.cart.find((item) => item.product.id === id);
    if (elemet) {
      elemet.quantity++;
    } else {
      const cartItem: CartItem = new CartItem();

      cartItem.product = products.find((item) => item.id === id)!;
      cartItem.quantity = 1;
      this.cart.push(cartItem);
    }
    sessionStorage.setItem(this.nombreStorage, JSON.stringify(this.cart));
  }

  reduceProduct(id: number) {
    const elemet = this.cart.find((item) => item.product.id === id);
    if (!elemet) return;
    if (elemet.quantity <= 1) this.removeProduct(id);
    else elemet.quantity--;
    sessionStorage.setItem(this.nombreStorage, JSON.stringify(this.cart));
  }

  removeProduct(id: number) {
    this.cart.splice(
      this.cart.findIndex((item) => item.product.id != id) - 1,
      1
    );
    sessionStorage.setItem(this.nombreStorage, JSON.stringify(this.cart));
  }
}
