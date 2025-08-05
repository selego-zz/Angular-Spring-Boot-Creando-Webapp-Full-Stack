import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product';
import { initializeCatalog } from './catalog.actions';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

export const catalogReducer = createReducer(
  initialState,
  on(initializeCatalog, (state, { products }) => {
    return {
      products: products,
    };
  })
);
