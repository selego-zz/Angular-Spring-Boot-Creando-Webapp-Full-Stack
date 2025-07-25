import { Invoice } from '../models/invoice';

export const invoiceData: Invoice = {
  id: 1,
  name: 'componentes de pc',
  client: {
    name: 'Andres',
    lastname: 'Doe',
    address: {
      country: 'USA',
      city: 'Los Angeles',
      street: 'One Street',
      number: 15,
    },
  },
  company: {
    name: 'New Age',
    fiscalNumber: 32132152,
  },
  total: function () {
    return this.items?.reduce((acc, item) => acc + item.total(), 0);
  },
  items: [
    {
      id: 1,
      product: 'CPU',
      price: 599,
      quantity: 1,
      total(): number {
        return this.price * this.quantity;
      },
    },
    {
      id: 2,
      product: 'Teclado',
      price: 5,
      quantity: 3,
      total(): number {
        return this.price * this.quantity;
      },
    },
    {
      id: 3,
      product: 'Monitor',
      price: 199,
      quantity: 2,
      total(): number {
        return this.price * this.quantity;
      },
    },
  ],
};
