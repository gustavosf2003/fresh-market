import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_DISCOUNTS } from "@app/queries/discounts";
import { View, Text } from "react-native";

import DiscountCard from "./DiscountCard";

interface DiscountProps {
  id: number;
  content: DiscountContent;
}

interface DiscountContent {
  title: string;
  description: string;
}

const Discounts: React.FC = () => {
  const { data } = useQuery(GET_DISCOUNTS);
  return (
    <View>
      <Text className="mb-8 text-2xl font-bold">Last Orders</Text>
      {data &&
        data?.DiscountItems.items.map((item: DiscountProps) => (
          <DiscountCard
            key={item.id}
            title={item.content.title}
            description={item.content.description}
          />
        ))}
    </View>
  );
};

export default Discounts;
