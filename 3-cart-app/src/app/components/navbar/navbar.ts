import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem } from '../../models/cartItem';
import { Product } from '../../models/product';

@Component({
  selector: 'navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() items: CartItem[] = [];
  @Input() products: Product[] = [];
  @Input() total: number = 0;
}
