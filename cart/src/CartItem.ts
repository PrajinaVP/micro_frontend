import { Product } from "src/Product";

export interface CartItem extends Product{
    quantity: number
}