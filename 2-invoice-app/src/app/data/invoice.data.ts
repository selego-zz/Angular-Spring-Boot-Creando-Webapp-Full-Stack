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
  items: [
    {
      id: 1,
      product: 'CPU',
      price: 599,
      quantity: 1,
    },
    {
      id: 2,
      product: 'Teclado',
      price: 5,
      quantity: 3,
    },
    {
      id: 3,
      product: 'Monitor',
      price: 199,
      quantity: 2,
    },
  ],
};
