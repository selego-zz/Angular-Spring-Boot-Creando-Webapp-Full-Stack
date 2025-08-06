import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cartItem';
import { Store } from '@ngrx/store';
import { selectItems } from '../../store/items.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [RouterModule, AsyncPipe],
  templateUrl: './navbar.html',
})
export class Navbar {
  items$: Observable<CartItem[]>;
  constructor(private readonly store: Store) {
    this.items$ = this.store.select(selectItems);
  }
}
