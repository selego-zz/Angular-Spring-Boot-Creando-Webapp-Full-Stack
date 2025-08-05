import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../models/cartItem';
import {
  addItem,
  initializeState,
  reduceItem,
  removeItem,
  total,
} from './items.actions';

export interface ItemsState {
  items: CartItem[];
  total: number;
}

export const initialState: ItemsState = {
  items: [],
  total: 0,
};

//estas funciones debería realizarlas, y las realiza, el servicio, llamando al store solo para grabar
// las pongo duplicadas aquí para practicar el manejo de datos
export const itemsReducer = createReducer(
  initialState,
  on(initializeState, (state, payload) => {
    return {
      items: payload.items,
      total: payload.total,
    };
  }),
  on(addItem, (state, { product }) => {
    const elemet: CartItem | undefined = state.items.find(
      (item: CartItem) => item.product.id === product.id
    );
    if (elemet) {
      return {
        items: state.items.map((item: CartItem) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
        total: state.total,
      };
    } else {
      return {
        items: [...state.items, { product: { ...product }, quantity: 1 }],
        total: state.total,
      };
    }
  }),
  on(reduceItem, (state, { id }) => {
    const elemet: CartItem | undefined = state.items.find(
      (item: CartItem) => item.product.id === id
    );
    if (elemet) {
      return {
        items: state.items.map((item: CartItem) => {
          if (item.product.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
        total: state.total,
      };
    } else {
      return {
        items: state.items,
        total: state.total,
      };
    }
  }),
  on(removeItem, (state, { id }) => {
    return {
      items: state.items.filter((item: CartItem) => item.product.id != id),
      total: state.total,
    };
  }),
  on(total, (state) => {
    return {
      items: state.items,
      total: state.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ),
    };
  })
);
