import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter Component] increment',
  props<{ term: number }>()
);
export const decrement = createAction(
  '[Counter Component] decrement',
  props<{ term: number }>()
);
export const reset = createAction('[Counter Component] reset');
