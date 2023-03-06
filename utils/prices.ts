import { businessRules } from "@app/config/constants";
import { Product } from "@app/interfaces/products";

export function calculateSubtotalCost(
  items: Product[],
  discount?: number
): number {
  let total = 0;
  for (const item of items) {
    total += item.content.price * (item.quantity || 0);
  }
  if (discount) {
    return total - discount + businessRules.deliveryFee;
  }
  return total + businessRules.deliveryFee;
}
export function calculateTotalCost(
  items: Product[],
  deliveryFee: number,
  discount?: number
): number {
  let total = 0;
  for (const item of items) {
    total += item.content.price * (item.quantity || 0);
  }
  if (discount) {
    return total - discount + deliveryFee;
  }
  return total + deliveryFee;
}

export function parseCurrency(value: number) {
  var formattedNum = (Math.round(value * 100) / 100).toFixed(2);
  return `${formattedNum}${businessRules.currency}`;
}
