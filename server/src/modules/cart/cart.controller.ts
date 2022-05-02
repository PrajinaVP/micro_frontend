import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import { CartItem } from './CartItem';
import { Cart } from './Cart';
import products from '../../products';
import { Product } from '../../Product';
import { partition } from 'rxjs';

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1
  })),
})

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3]),
  }
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? {cartItems: []};
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() requestAnimationFrame, @Body() { id }: { id: string }): Promise<Cart> {
    console.log("Server create cart prod id:: " + id);
    const cart = this.carts[requestAnimationFrame.user.userId];
    const cartItem = cart.cartItems.find(
      (cartItem) => cartItem.id = parseInt(id),
    );
    console.log("cart item :: " + cartItem + " \n stringified :: " + JSON.stringify(cartItem));
    if (cartItem) {
      console.log("In IF " + cartItem + " \n stringified :: " + JSON.stringify(cartItem));
      cartItem.quantity += 1;
      console.log("In IF qty + " + cartItem + " \n stringified :: " + JSON.stringify(cartItem));
    } else {
      console.log("In ELSE " + cartItem + " \n stringified :: " + JSON.stringify(cartItem));
      cart.cartItems.push({
        ...products.find((product) => product.id = parseInt(id)),
        quantity: 1,
      })
      console.log("In ELSE qty +  " + cartItem + " \n stringified :: " + JSON.stringify(cartItem));
    }

    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<Cart> {
    this.carts[req.user.userId] = { cartItems: [] };
    return this.carts[req.user.userId];
  }
}
