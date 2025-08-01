import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.html',
})
export class InvoiceViewComponent {
  @Input() name!: string;
  @Input() id!: number;
}
