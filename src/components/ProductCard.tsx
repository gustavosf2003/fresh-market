import { StorageKeys, setStorageData } from "../../utils/storage";
import React, { createContext, useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Counter from "./Counter";
import { addToCart, removeFromCart } from "../../utils/manageCart";
import { Product } from "../../interfaces/products";
import { ProductContext } from "../screens/Home";

export interface ProductCardProps {
  savedProducts: Product[];
  setSavedProducts: React.Dispatch<React.SetStateAction<any>>;
  product: Product;
}
interface ProductProp {
  product: Product;
}
const ProductCard = ({ product }: ProductProp) => {
  const { savedProducts, setSavedProducts } = useContext(ProductContext);
  const [counterValue, setCounterValue] = useState(0);
  return (
    <View className="flex flex-row justify-between mt-4">
      <View className="flex flex-row ">
        <View className="w-32 h-20 bg-gray-300"></View>
        <View className="flex justify-between my-1 ml-2 ">
          <View>
            <Text className="flex font-medium">{product.name}</Text>
            <Text>Origin: {product.origin}</Text>
          </View>
          <Text className="font-bold">{product.price}€</Text>
        </View>
      </View>
      <Counter
        counter={counterValue}
        removeItem={() => {
          if (counterValue > 0) {
            setCounterValue(counterValue - 1);
            removeFromCart({ product, savedProducts, setSavedProducts });
          }
        }}
        addItem={() => {
          if (counterValue < 9) {
            setCounterValue(counterValue + 1);
            addToCart({ product, savedProducts, setSavedProducts });
          }
        }}
      />
    </View>
  );
};

export default ProductCard;
