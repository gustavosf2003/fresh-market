import { StorageKeys, setStorageData } from "../../utils/storage";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Counter from "./Counter";
import { addToCart, removeFromCart } from "../../utils/manageCart";
import { ProductCardProps } from "../../interfaces/products";

const ProductCard = ({ cart, setCart, product }: ProductCardProps) => {
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
            removeFromCart({ product, cart, setCart });
          }
        }}
        addItem={() => {
          if (counterValue < 9) {
            setCounterValue(counterValue + 1);
            addToCart({ product, cart, setCart });
          }
        }}
      />
    </View>
  );
};

export default ProductCard;
