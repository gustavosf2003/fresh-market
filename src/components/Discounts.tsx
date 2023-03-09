import React from "react";
import DiscountCard from "./DiscountCard";
import { View, Text } from "react-native";
import { GET_DISCOUNTS } from "@app/queries/discounts";
import { useQuery } from "@apollo/react-hooks";

interface DiscountProps {
  id: number;
  content: DiscountContent;
}

interface DiscountContent {
  title: string;
  description: string;
}

const Discounts: React.FC = () => {
  const { loading, error, data } = useQuery(GET_DISCOUNTS);
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
