import React from "react";
import { ScrollView, View } from "react-native";
import Badge from "./Badge";

interface ScrollListProps {
  categories: string[];
  currentCategory: string;
  categoryChange: React.Dispatch<React.SetStateAction<string>>;
}

const ScrollList = ({
  categories,
  currentCategory,
  categoryChange,
}: ScrollListProps) => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 16 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {
        return <Badge title={category} badgeChange={categoryChange}></Badge>;
      })}
    </ScrollView>
  );
};

export default ScrollList;
