import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private readonly invoice: Invoice = invoiceData;

  getInvoice(): Invoice {
    return this.invoice;
  }

  getTotal(): number {
    return this.invoice.items.reduce((acc, item) => acc + item.total(), 0);
  }

  deleteItem(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter((item) => item.id != id);
    return this.invoice;
  }
  addItem(item: Item): Invoice {
    this.invoice.items.push(item);
    return this.invoice;
  }
}
