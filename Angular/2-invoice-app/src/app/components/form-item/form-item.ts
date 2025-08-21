import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.html',
})
export class FormItemComponent {
  @Output() addItemEventEmitter = new EventEmitter();
  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: '',
    total(): number {
      return this.price * this.quantity;
    },
  };

  onSubmit(itemForm: NgForm): void {
    if (!itemForm.valid) return;

    this.addItemEventEmitter.emit({ ...this.item, id: this.counterId++ });
    this.item.product = '';
    this.item.price = '';
    this.item.quantity = '';

    itemForm.reset();
    itemForm.resetForm();
  }
}
