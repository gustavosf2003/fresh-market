import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { clsx } from "clsx";

interface BadgeProps {
  title: string;
  badgeChange?: React.Dispatch<React.SetStateAction<any>>;
  active?: boolean;
}

const Badge = ({ title, badgeChange, active }: BadgeProps) => {
  return (
    <TouchableOpacity
      onPress={badgeChange ? () => badgeChange(title) : () => {}}
      className={clsx(
        "flex flex-row items-center justify-center px-3.5 py-2 rounded-2xl mx-1",
        active
          ? " border-2 border-primary bg-[#e1fdefff] text-primary"
          : "bg-gray-300"
      )}
    >
      <Text className="capitalize">{title}</Text>
    </TouchableOpacity>
  );
};

export default Badge;
