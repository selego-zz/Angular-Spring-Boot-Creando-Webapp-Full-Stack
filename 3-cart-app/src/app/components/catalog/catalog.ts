import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';
import { SharingDataService } from '../../services/sharing-data';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts } from '../../store/catalog.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'catalog',
  imports: [ProductCardComponent, AsyncPipe],
  templateUrl: './catalog.html',
})
export class CatalogComponent {
  products$: Observable<Product[]>;
  constructor(
    private readonly catalog: Store,
    private readonly sharingDataService: SharingDataService
  ) {
    this.products$ = this.catalog.select(selectProducts);
  }
  addProduct(id: number): void {
    this.sharingDataService.addEventEmitter.emit(id);
  }
}
