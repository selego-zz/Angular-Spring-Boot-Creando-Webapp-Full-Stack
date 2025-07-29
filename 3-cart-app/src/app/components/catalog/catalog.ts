import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';
import { SharingDataService } from '../../services/sharing-data';
import { Router } from '@angular/router';

@Component({
  selector: 'catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.html',
})
export class CatalogComponent {
  products: Product[] = [];

  constructor(
    private readonly sharingDataService: SharingDataService,
    private readonly router: Router
  ) {
    this.products =
      this.router.getCurrentNavigation()?.extras.state!['products'];
  }

  addProduct(id: number): void {
    this.sharingDataService.addEventEmitter.emit(id);
  }
}
