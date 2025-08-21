import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product';
import { initializeCatalog, load } from './catalog.actions';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};

export const catalogReducer = createReducer(
  initialState,

  on(load, (state) => ({ products: [...state.products] })),
  on(initializeCatalog, (state, { products }) => {
    return {
      products: products,
    };
  })
);
