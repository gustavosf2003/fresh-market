import { NavigationProp } from "@react-navigation/native";
import { Product } from "../interfaces/products";
import { calculateTotalCost } from "./prices";
import { RoutesName } from "../config/constants";
import { setStorageData, StorageKeys } from "./storage";

interface Order {
  products: Product[];
  tips: number;
  deliveryFee: number;
  price: number;
}

export function sendOrder(
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  products: Product[],
  tips: number,
  deliveryFee: number,
  discount: number,
  price?: number
) {
  let order: Order = {
    products: products,
    tips: tips,
    price: calculateTotalCost(products, deliveryFee, discount),
    deliveryFee: deliveryFee,
  };
  console.log(order);
  // navigation.navigate(RoutesName.processing as never);
  // setStorageData(StorageKeys.products, "[]");
}
