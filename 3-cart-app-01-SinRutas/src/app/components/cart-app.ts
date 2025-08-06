import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Product } from '../models/product';
import { CatalogComponent } from './catalog/catalog';
import { CartItem } from '../models/cartItem';
import { Navbar } from './navbar/navbar';
import { CartModalComponent } from './cart-modal/cart-modal';

@Component({
  selector: 'cart-app',
  imports: [CatalogComponent, CartModalComponent, Navbar],
  templateUrl: './cart-app.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];
  items: CartItem[] = [];
  //  total: number = 0;
  showCart: boolean = false;

  constructor(private readonly service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = this.service.getCart();
  }

  addProduct(id: number): void {
    this.items = this.service.addProduct(id);
  }

  reduceProduct(id: number) {
    this.items = this.service.reduceProduct(id);
  }
  removeProduct(id: number) {
    this.items = this.service.removeProduct(id);
  }
}
