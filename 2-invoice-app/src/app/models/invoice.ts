import { Client } from './client';
import { Company } from './Company';
import { Item } from './item';

export class Invoice {
  id!: number;
  name!: string;
  client!: Client;
  company!: Company;
  items!: Item[];
}
