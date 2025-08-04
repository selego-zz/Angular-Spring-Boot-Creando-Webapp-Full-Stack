import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './items.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, payload) => state + payload.term),
  on(decrement, (state, { term }) => state - term), //equivalente a lo de arriba
  on(reset, (state) => 0)
);
