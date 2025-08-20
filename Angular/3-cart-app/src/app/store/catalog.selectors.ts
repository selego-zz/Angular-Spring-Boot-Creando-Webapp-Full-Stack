import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../models/product';
import { ProductState } from './catalog.reducer';

export const selectCatalogState =
  createFeatureSelector<ProductState>('products');

//selector para los items del carrito
export const selectProducts = createSelector(
  selectCatalogState,
  (state: ProductState) => state.products
);

// Selector para un producto concreto por id
export const selectProductById = (id: number) =>
  createSelector(selectProducts, (products: Product[]) =>
    products.find((item) => item.id === id)
  );
