import { Product } from "../interfaces/products";

interface Order {
  products: Product[];
  tips: number;
  deliveryFee: number;
  discount: number;
}

export function sendOrder(
  products: Product[],
  tips: number,
  deliveryFee: number,
  discount: number
) {
  let order: Order = {
    products: products,
    tips: tips,
    deliveryFee: deliveryFee,
    discount: discount,
  };
  console.log(order);
}
