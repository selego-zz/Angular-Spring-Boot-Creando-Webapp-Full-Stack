import { Injectable } from '@angular/core';
import { ProductService } from '../../services/product';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs';
import { initializeState, loadCart, saveCart } from '../items.actions';
import { CartItem } from '../../models/cartItem';

@Injectable()
export class ItemsEffects {
  //el primer pipe llamaría al servicio y obtendría los datos, el segundo pipe trabaja con los datos obtenidos
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCart),
      exhaustMap(() => this.service.getCart()),
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
        tap(({ items }) => this.service.saveCart(items))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly service: ProductService
  ) {}
}
