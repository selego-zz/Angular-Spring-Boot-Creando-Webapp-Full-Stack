import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../models/cartItem';
import {
  addItem,
  initializeState,
  loadCart,
  reduceItem,
  removeItem,
} from './items.actions';

export interface ItemsState {
  items: CartItem[];
  total: number;
}

export const initialState: ItemsState = {
  items: [],
  total: 0,
};

// Función auxiliar para calcular el total, para no repetir código
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
};

export const itemsReducer = createReducer(
  initialState,

  on(loadCart, (state, payload) => {
    return {
      items: [...state.items],
      total: calculateTotal(state.items),
    };
  }),
  on(initializeState, (state, payload) => {
    return {
      items: payload.items,
      total: calculateTotal(payload.items),
    };
  }),
  on(addItem, (state, { product }) => {
    const elemet: CartItem | undefined = state.items.find(
      (item: CartItem) => item.product.id === product.id
    );
    let updatedItems: CartItem[];
    if (elemet) {
      updatedItems = state.items.map((item: CartItem) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      updatedItems = [...state.items, { product: { ...product }, quantity: 1 }];
    }
    return { items: updatedItems, total: calculateTotal(updatedItems) };
  }),
  on(reduceItem, (state, { id }) => {
    let updatedItems: CartItem[] = [];
    updatedItems = state.items
      .map((item: CartItem) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item: CartItem) => item.quantity > 0);
    return {
      items: updatedItems,
      total: calculateTotal(updatedItems),
    };
  }),
  on(removeItem, (state, { id }) => {
    let updatedItems: CartItem[] = state.items.filter(
      (item: CartItem) => item.product.id != id
    );
    return {
      items: updatedItems,
      total: calculateTotal(updatedItems),
    };
  })
);
