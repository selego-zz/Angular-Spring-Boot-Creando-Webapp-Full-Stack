import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { CartItem } from '../models/cartItem';
import { Navbar } from './navbar/navbar';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data';

import Swal from 'sweetalert2';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectItems, selectTotal } from '../store/items.selectors';
import {
  addItem,
  initializeState,
  reduceItem,
  removeItem,
  total,
} from '../store/items.actions';
import { Product } from '../models/product';
import { selectProductById } from '../store/catalog.selectors';
import { initializeCatalog } from '../store/catalog.actions';
import { load } from '../store/catalog.actions';
import { ItemsState } from '../store/items.reducer';

@Component({
  selector: 'cart-app',
  imports: [RouterOutlet, Navbar],
  templateUrl: './cart-app.html',
})
export class CartAppComponent implements OnInit {
  items$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(
    private readonly router: Router,
    private readonly sharingDataService: SharingDataService,
    private readonly service: ProductService,
    private readonly store: Store<{ item: ItemsState }>,
    private readonly catalog: Store
  ) {
    const items = service.getCart();
    const totalCart = items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    this.store.dispatch(initializeState({ items: items, total: totalCart }));
    this.catalog.dispatch(load());
    this.items$ = this.store.select(selectItems);
    this.total$ = this.store.select(selectTotal);
    this.items$.subscribe((items) => {
      this.service.saveCart(items);
      this.store.dispatch(total());
    });
  }

  ngOnInit(): void {
    this.addProduct();
    this.reduceProduct();
    this.removeProduct();
  }

  addProduct(): void {
    this.sharingDataService.addEventEmitter.subscribe((id) => {
      //lo añadimos al store
      const product$: Observable<Product | undefined> = this.catalog.select(
        selectProductById(id)
      );
      product$.pipe(take(1)).subscribe((product: Product | undefined) => {
        if (product) this.store.dispatch(addItem({ product }));
      });

      this.router.navigate(['/cart']);
    });
  }

  reduceProduct() {
    this.sharingDataService.reduceEventEmitter.subscribe((id: number) => {
      this.store.dispatch(reduceItem({ id }));
    });
  }
  removeProduct() {
    this.sharingDataService.removeEventEmitter.subscribe((id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.store.dispatch(removeItem({ id }));
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
          this.router.navigate(['/cart']);
        }
      });
    });
  }
}
