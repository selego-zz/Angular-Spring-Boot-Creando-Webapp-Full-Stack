import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() items: CartItem[] = [];
  @Input() total: number = 0;
}
