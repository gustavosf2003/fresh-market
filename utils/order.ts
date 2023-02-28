import { Product } from "../interfaces/products";
import { calculateTotalCost } from "./prices";

interface Order {
  products: Product[];
  tips: number;
  deliveryFee: number;
  discount: number;
  price: number;
}

export function sendOrder(
  products: Product[],
  tips: number,
  deliveryFee: number,
  discount: number,
  price: number
) {
  let order: Order = {
    products: products,
    tips: tips,
    deliveryFee: deliveryFee,
    discount: discount,
    price: calculateTotalCost(products, deliveryFee, discount),
  };
  console.log(order);
}
