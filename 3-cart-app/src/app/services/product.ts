import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';
import { CartItem } from '../models/cartItem';
import { Observable, of } from 'rxjs';

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

  findAll(): Observable<Product[]> {
    return of(products);
  }
  getCart(): CartItem[] {
    return this.cart;
  }

  saveCart(newCart: CartItem[]) {
    sessionStorage.setItem(this.nombreStorage, JSON.stringify(newCart));
  }

  addProduct(id: number): CartItem[] {
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
    return [...this.cart];
  }

  reduceProduct(id: number): CartItem[] {
    const elemet = this.cart.find((item) => item.product.id === id);
    if (!elemet) return this.cart;
    if (elemet.quantity <= 1) this.removeProduct(id);
    else elemet.quantity--;
    sessionStorage.setItem(this.nombreStorage, JSON.stringify(this.cart));
    return [...this.cart];
  }

  removeProduct(id: number): CartItem[] {
    const index = this.cart.findIndex((item) => item.product.id === id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    sessionStorage.setItem(this.nombreStorage, JSON.stringify(this.cart));
    return [...this.cart];
  }
}
