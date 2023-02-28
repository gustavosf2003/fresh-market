import React from "react";
import Card from "../Card";
import { View, Text } from "react-native";
import { calculateSubtotalCost, calculateTotalCost } from "@app/utils/prices";
import { businessRules } from "@app/config/constants";
import { Product } from "@app/interfaces/products";

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
          <Text>
            - {discount}
            {businessRules.currency}
          </Text>
        </View>
        <View className="flex flex-row justify-between">
          <Text>Subtotal</Text>
          <Text>
            {calculateSubtotalCost(savedProducts)}
            {businessRules.currency}
          </Text>
        </View>
        <View className="flex flex-row justify-between">
          <Text>Delivery fee</Text>
          <Text>
            {deliveryFee}
            {businessRules.currency}
          </Text>
        </View>
      </View>
      <View className={`border-b border-gray-300 my-3`} />
      <View className="flex flex-row justify-between mt-1.5">
        <Text>Total</Text>
        <Text>{calculateTotalCost(savedProducts, deliveryFee, discount)}€</Text>
      </View>
    </Card>
  );
};

export default Costs;
