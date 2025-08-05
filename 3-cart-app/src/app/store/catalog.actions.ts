import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const load = createAction('load');
export const initializeCatalog = createAction(
  'initializeCatalog',
  props<{ products: Product[] }>()
);
