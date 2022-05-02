import { Controller, Get, Param } from '@nestjs/common';
import products from '../../products'
import { Product } from "../../Product";

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Product> {
    console.log("server id :: " + id);
    console.log("stringified product find :: " + JSON.stringify(products.find((product) => product.id === parseInt(id))));
    return products.find((product) => product.id === parseInt(id));
  }
}
