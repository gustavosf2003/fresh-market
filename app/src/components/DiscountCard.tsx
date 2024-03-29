import React, { useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

interface DiscountCardProps {
  title: string;
  description: string;
}

const DiscountCard = ({ title, description }: DiscountCardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <TouchableOpacity
      className="pb-2 mb-8 border-b border-b-gray-500"
      onPress={() => setIsClicked(!isClicked)}>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-lg font-semibold">{title}</Text>
        <FontAwesome
          name={isClicked ? "chevron-up" : "chevron-down"}
          size={18}
          color="black"
        />
      </View>
      {isClicked && <Text className="mt-2">{description}</Text>}
    </TouchableOpacity>
  );
};

export default DiscountCard;
