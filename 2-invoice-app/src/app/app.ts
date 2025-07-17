import { Component } from '@angular/core';
import { InvoiceComponent } from './components/invoice/invoice';

@Component({
  selector: 'app-root',
  imports: [InvoiceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = '2-invoice-app';
}
