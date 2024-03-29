import React from "react";

import { Product } from "@app/interfaces/products";
import { calculateSubtotalCost, calculateTotalCost } from "@app/utils/prices";
import { View, Text } from "react-native";

import { parseCurrency } from "../../../utils/prices";
import Card from "../Card";

interface CostsProps {
  discount: number;
  savedProducts: Product[];
  deliveryFee: number;
}

const Costs = ({ discount, savedProducts, deliveryFee }: CostsProps) => {
  return (
    <Card>
      <View className="flex gap-2.5 mb-2">
        <View className="flex flex-row justify-between">
          <Text>Discount</Text>
          <Text>- {parseCurrency(discount)}</Text>
        </View>
        <View className="flex flex-row justify-between">
          <Text>Subtotal</Text>
          <Text>{parseCurrency(calculateSubtotalCost(savedProducts))}</Text>
        </View>
        <View className="flex flex-row justify-between">
          <Text>Delivery fee</Text>
          <Text>{parseCurrency(deliveryFee)}</Text>
        </View>
      </View>
      <View className={`border-b border-gray-300 my-3`} />
      <View className="flex flex-row justify-between mt-1.5">
        <Text>Total</Text>
        <Text>
          {parseCurrency(
            calculateTotalCost(savedProducts, deliveryFee, discount)
          )}
        </Text>
      </View>
    </Card>
  );
};

export default Costs;
