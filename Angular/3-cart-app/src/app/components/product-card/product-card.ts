import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addEventEmitter: EventEmitter<number> = new EventEmitter();

  addProduct(id: number): void {
    this.addEventEmitter.emit(id);
  }
}
