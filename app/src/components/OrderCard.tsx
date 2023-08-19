import React from "react";

import { View, Text } from "react-native";

const OrderCard: React.FC = () => {
  return (
    <View className="pt-1 pb-3 mb-3.5 bg-gray-300 rounded-lg">
      <Text className="px-3 text-lg font-bold">Order #91202</Text>
      <View>
        <View className="flex gap-1 px-3 mt-2">
          <Text>Status: Accepted</Text>
          <Text>Order time: 06/10/2003 - 10:20pm</Text>
          <Text>Address: Rua joao do nascimento costa</Text>
          <Text>
            Products: 3x banana, 2x tuna, 3x salmon, 3x apple, 4x pastel de nata
          </Text>
        </View>
        <View className="my-3 border border-gray-400" />
        <View className="flex flex-row items-center justify-between mx-3">
          <Text className="font-semibold">Price: </Text>
          <Text className="font-semibold">10.40$</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
