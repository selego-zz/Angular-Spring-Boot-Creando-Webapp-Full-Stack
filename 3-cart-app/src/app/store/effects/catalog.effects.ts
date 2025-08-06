import { Injectable } from '@angular/core';
import { ProductService } from '../../services/product';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { initializeCatalog, load } from '../catalog.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class CatalogEffects {
  //el primer pipe llamaría al servicio y obtendría los datos, el segundo pipe trabaja con los datos obtenidos
  loadProducts$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(load),
        exhaustMap(() => this.service.findAll())
      )
      .pipe(map((products) => initializeCatalog({ products })))
  );

  constructor(
    private readonly actions$: Actions,
    private readonly service: ProductService
  ) {}
}
