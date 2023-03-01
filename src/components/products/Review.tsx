import React, { useMemo } from "react";
import { View, Text } from "react-native";
import Card from "../Card";
import { calculateTotalCost } from "@app/utils/prices";
import { businessRules } from "@app/config/constants";
import { Product } from "@app/interfaces/products";

interface ReviewProps {
  products: Product[];
  tips: number;
}

const Review = ({ products, tips }: ReviewProps) => {
  const total = useMemo(
    () => calculateTotalCost(products, businessRules.deliveryFee + tips),
    [products, tips]
  );
  const parsedTotal = `${total} ${businessRules.currency}`;
  return (
    <Card>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-semibold">Total</Text>
        <Text className="text-2xl font-bold">{parsedTotal}</Text>
      </View>
      <View className="flex flex-row justify-between mt-2">
        <View className="flex flex-row items-center">
          <View className="w-6 h-5 mr-2 bg-slate-300"></View>
          <Text>MBWay</Text>
        </View>
        <Text>{parsedTotal}</Text>
      </View>
    </Card>
  );
};

export default Review;
