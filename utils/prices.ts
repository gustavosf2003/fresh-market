import { StorageKeys, getStorageData } from '@app/utils/storage';
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


enum DiscountDays  {
  Halloween = "11/03",
  Christmas = "25/12",
  Birthday = "06/10",
}

export async function getDiscount() {
  var date = new Date
  var currentDate = `${date.getDate()}/${date.getMonth() + 1}`
  let orders = await getStorageData(StorageKeys.orders)
  if (typeof orders === 'string' && orders.length > 0) {
    const parsedOrders = JSON.parse(orders);
    if(parsedOrders.length < 1){
      return 1.15
    }
  }
  switch (currentDate) {
    case DiscountDays.Halloween:
      return 1.05
    case DiscountDays.Birthday:
    return 2
    case DiscountDays.Christmas:
      return 1.15
  }
  return 1
}