import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './items.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState, //pasamos el estado incial
  on(increment, (state) => state + 1), //ojo: no usamos ++ por que no se debe cambiar el estado
  // (state) => state + 1 === (state) => { return state + 1; }
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
