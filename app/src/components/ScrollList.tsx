import React from "react";

import { ScrollView } from "react-native";

import Badge from "./Badge";

interface ScrollListProps {
  categories: string[];
  currentCategory: string;
  categoryChange: React.Dispatch<React.SetStateAction<string>>;
  nativeWindStyle: string;
}

const ScrollList = ({
  categories,
  currentCategory,
  categoryChange,
  nativeWindStyle,
}: ScrollListProps) => {
  return (
    <ScrollView
      className={nativeWindStyle}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {categories.map((category) => {
        return (
          <Badge
            key={category}
            title={category}
            active={currentCategory === category}
            badgeChange={categoryChange}
          />
        );
      })}
    </ScrollView>
  );
};

export default ScrollList;
