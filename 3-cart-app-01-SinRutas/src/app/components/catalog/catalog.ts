import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.html',
})
export class CatalogComponent {
  @Input() products: Product[] = [];
  @Output() addEventEmitter: EventEmitter<number> = new EventEmitter();

  addProduct(id: number): void {
    this.addEventEmitter.emit(id);
  }
}
