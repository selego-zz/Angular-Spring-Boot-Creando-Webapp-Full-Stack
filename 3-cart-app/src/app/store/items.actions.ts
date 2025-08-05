import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';

export const initializeState = createAction(
  'initializeState',
  props<{ items: CartItem[]; total: number }>()
);
export const addItem = createAction('addItem', props<{ product: Product }>());
export const reduceItem = createAction('reduceItem', props<{ id: number }>());
export const removeItem = createAction('removeItem', props<{ id: number }>());
export const total = createAction('total');
