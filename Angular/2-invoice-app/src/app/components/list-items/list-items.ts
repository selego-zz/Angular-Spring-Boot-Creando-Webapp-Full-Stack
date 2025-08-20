import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.html',
})
export class ListItemsComponent {
  @Input() items!: Item[];

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id: number): void {
    this.removeEventEmitter.emit(id);
  }
}
