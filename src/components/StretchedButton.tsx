import clsx from "clsx";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  nativeWindStyle?: string;
}

const StretchedButton = ({
  children,
  onPress,
  nativeWindStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(
        "flex items-center justify-center w-full h-12 rounded-lg bg-primary",
        nativeWindStyle
      )}
    >
      <Text className="text-lg font-bold text-white">{children}</Text>
    </TouchableOpacity>
  );
};

export default StretchedButton;
