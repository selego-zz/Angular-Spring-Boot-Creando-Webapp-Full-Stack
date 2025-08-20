import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.Service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view';
import { ClientViewComponent } from '../client-view/client-view';
import { CompanyViewComponent } from '../company-view/company-view';
import { ListItemsComponent } from '../list-items/list-items';
import { TotalComponent } from '../total/total';
import { FormItemComponent } from '../form-item/form-item';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoiceComponent',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent,
  ],
  templateUrl: './invoice.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private readonly service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: number): void {
    this.invoice = this.service.deleteItem(id);
  }
  addItem(item: Item) {
    this.invoice = this.service.addItem(item);
  }
}
