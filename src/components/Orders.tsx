import React from "react";
import { View, Text, ScrollView } from "react-native";
import OrderCard from "./OrderCard";

const Orders: React.FC = () => {
  return (
    <View>
      <Text className="mb-8 text-2xl font-bold">Last Orders</Text>
      <ScrollView>
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </View>
  );
};

export default Orders;
