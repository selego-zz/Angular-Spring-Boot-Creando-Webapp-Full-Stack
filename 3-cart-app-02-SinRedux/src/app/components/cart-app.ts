import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { CartItem } from '../models/cartItem';
import { Navbar } from './navbar/navbar';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data';

import Swal from 'sweetalert2';

@Component({
  selector: 'cart-app',
  imports: [RouterOutlet, Navbar],
  templateUrl: './cart-app.html',
})
export class CartAppComponent implements OnInit {
  items: CartItem[] = [];
  total: number = 0;

  constructor(
    private readonly router: Router,
    private readonly sharingDataService: SharingDataService,
    private readonly service: ProductService
  ) {}

  ngOnInit(): void {
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

      this.router.navigate(['/cart'], {
        state: { items: this.items, total: this.total },
      });

      Swal.fire({
        title: 'Shopping cart',
        text: 'Producto añadido',
        icon: 'success',
      });
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
          this.items = this.service.removeProduct(id);
          this.calculateTotal();
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate(['/cart'], {
                state: { items: this.items, total: this.total },
              });
            });
        }
      });
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
