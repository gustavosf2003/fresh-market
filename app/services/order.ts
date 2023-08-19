import { Product } from "@app/interfaces/products";
import { calculateTotalCost } from "@app/utils/prices";
import {
  StorageKeys,
  getStorageData,
  setStorageData,
} from "@app/utils/storage";
import { API_ENDPOINT } from "@env";
import { NavigationProp } from "@react-navigation/native";
import axios from "axios";

import { RoutesName } from "../config/constants";

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
  discount: number
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
    console.log("Sending order");
    const response = await axios.post(`${API_ENDPOINT}/order`, order);
    console.log(response.data);
    navigation.navigate(RoutesName.processing as never);
    setStorageData(StorageKeys.products, "[]");
  } catch (error) {
    console.error(error); // handle error
  }
}
