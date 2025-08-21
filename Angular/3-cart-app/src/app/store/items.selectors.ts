import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem } from '../models/cartItem';
import { ItemsState } from './items.reducer';

export const selectCartState = createFeatureSelector<ItemsState>('items');

//selector para los items del carrito
export const selectItems = createSelector(
  selectCartState,
  (stateItems: ItemsState) => stateItems.items
);

// Selector para el total del carrito
export const selectTotal = createSelector(
  selectCartState,
  (state: ItemsState) => state.total
);

// Selector para un producto concreto por id
export const selectCartItemById = (id: number) =>
  createSelector(selectItems, (items: CartItem[]) =>
    items.find((item) => item.product.id === id)
  );
