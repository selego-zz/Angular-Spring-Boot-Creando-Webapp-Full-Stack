import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.Service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoiceComponent',
  imports: [],
  templateUrl: './invoice.Component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private readonly service: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
