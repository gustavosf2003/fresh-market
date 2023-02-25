import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface BadgeProps {
  title: string;
  badgeChange?: React.Dispatch<React.SetStateAction<string>>;
}

const Badge = ({ title, badgeChange }: BadgeProps) => {
  return (
    <TouchableOpacity
      onPress={badgeChange ? () => badgeChange(title) : () => {}}
      className="flex flex-row items-center justify-center px-3.5 py-2 bg-gray-300 rounded-2xl mx-1"
    >
      <Text className="capitalize">{title}</Text>
    </TouchableOpacity>
  );
};

export default Badge;
