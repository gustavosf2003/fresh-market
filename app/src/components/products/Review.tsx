import React, { useMemo } from "react";

import { businessRules } from "@app/config/constants";
import { Product } from "@app/interfaces/products";
import { calculateTotalCost } from "@app/utils/prices";
import { parseCurrency } from "@app/utils/prices";
import { View, Text, Image } from "react-native";

import Card from "../Card";

interface ReviewProps {
  products: Product[];
  tips: number;
}

const Review = ({ products, tips }: ReviewProps) => {
  const total = useMemo(
    () => calculateTotalCost(products, businessRules.deliveryFee + tips),
    [products, tips]
  );
  return (
    <Card>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-semibold">Total</Text>
        <Text className="text-2xl font-bold">{parseCurrency(total)}</Text>
      </View>
      <View className="flex flex-row justify-between mt-2">
        <View className="flex flex-row items-center">
          <Image
            className="w-6 h-5 mr-2 "
            source={require("@app/assets/mbway.png")}
          />
          <Text>MBWay</Text>
        </View>
        <Text>{parseCurrency(total)}</Text>
      </View>
    </Card>
  );
};

export default Review;
