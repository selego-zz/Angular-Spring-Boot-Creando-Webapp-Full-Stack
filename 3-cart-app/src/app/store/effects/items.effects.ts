import { Injectable } from '@angular/core';
import { ProductService } from '../../services/product';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap, withLatestFrom } from 'rxjs';
import { initializeState, loadCart, saveCart } from '../items.actions';
import { CartItem } from '../../models/cartItem';
import { Store } from '@ngrx/store';
import { ItemsState } from '../items.reducer';
import { selectItems } from '../items.selectors';

@Injectable()
export class ItemsEffects {
  //el primer pipe llamaría al servicio y obtendría los datos, el segundo pipe trabaja con los datos obtenidos
  loadProducts$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(loadCart),
        exhaustMap(() => this.service.getCart())
      )
      .pipe(
        map((items: CartItem[]) =>
          initializeState({
            items: items,
            total: items.reduce(
              (acc, item) => acc + item.product.price * item.quantity,
              0
            ),
          })
        )
      )
  );

  saveCartToService$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveCart),
        withLatestFrom(this.store.select(selectItems)), // <--- Obtiene los items del Store
        tap(([action, items]) => {
          this.service.saveCart(items);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly service: ProductService,
    private readonly store: Store<{ items: ItemsState }>
  ) {}
}
