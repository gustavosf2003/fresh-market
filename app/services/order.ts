import axios from "axios";
import { NavigationProp } from "@react-navigation/native";
import { RoutesName } from "../config/constants";
import { calculateTotalCost } from "@app/utils/prices";
import {
  StorageKeys,
  getStorageData,
  setStorageData,
} from "@app/utils/storage";
import { Product } from "@app/interfaces/products";

interface Order {
  name: string | null | undefined;
  email: string | null | undefined;
  address: string | null | undefined;
  products: Product[];
  tips: number;
  deliveryFee: number;
  price: number;
}

export async function sendOrder(
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  products: Product[],
  tips: number,
  deliveryFee: number,
  discount: number,
  price?: number
) {
  let order: Order = {
    name: await getStorageData(StorageKeys.name),
    email: await getStorageData(StorageKeys.email),
    address: await getStorageData(StorageKeys.address),
    products: products,
    tips: tips,
    price: calculateTotalCost(products, deliveryFee, discount) + tips,
    deliveryFee: deliveryFee,
  };
  try {
    const response = await axios.post("http://localhost:3030/order", order);
    console.log(response.data);
    navigation.navigate(RoutesName.processing as never);
    setStorageData(StorageKeys.products, "[]");
  } catch (error) {
    console.error(error); // handle error
  }
}
