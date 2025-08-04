import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card';
import { SharingDataService } from '../../services/sharing-data';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product';

@Component({
  selector: 'catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.html',
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private readonly service: ProductService,
    private readonly sharingDataService: SharingDataService
  ) {}
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

  addProduct(id: number): void {
    this.sharingDataService.addEventEmitter.emit(id);
  }
}
