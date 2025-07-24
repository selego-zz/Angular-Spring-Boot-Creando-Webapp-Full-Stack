import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() length: number = 0;
  @Output() show = new EventEmitter();

  showCart(): void {
    this.show.emit();
  }
}
