import { Product } from '../models/product';

const dtos: Product[] = [];
let dto!: Product;

dto = new Product();
dto.id = 1;
dto.name = 'Teclado mecánico';
dto.description = 'Algun teclado mecánico con luces RGb y switches cherry red';
dto.price = 100;
dtos.push(dto);

dto = new Product();
dto.id = 2;
dto.name = 'Samsung Smart TV LED 75';
dto.description = 'Algun TV excelende OLED';
dto.price = 200;
dtos.push(dto);

dto = new Product();
dto.id = 3;
dto.name = 'Sony Camara Video';
dto.description = 'Alguna camara video para streaming';
dto.price = 310;
dtos.push(dto);

dto = new Product();
dto.id = 4;
dto.name = 'Corsair memorias ram 15 GB DDRS';
dto.description = 'Memoria Ram Optimizada para juegos';
dto.price = 180;
dtos.push(dto);

dto = new Product();
dto.id = 5;
dto.name = 'Nvidia ASUS RTX4900';
dto.description =
  'Tajeta de video nvidia optiminada para tareas multicore videojuegos 4k';
dto.price = 500;
dtos.push(dto);

dto = new Product();
dto.id = 6;
dto.name = 'CPU Intel Core i7';
dto.description = 'CPU optimizada tareas multicore';
dto.price = 400;
dtos.push(dto);

export const products: Product[] = dtos;
