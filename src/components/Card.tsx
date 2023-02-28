import React from "react";
import { View } from "react-native";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  nativeWindStyle?: string;
}
const Card = ({ children, nativeWindStyle }: CardProps) => {
  return (
    <View
      className={clsx(nativeWindStyle, "mt-4 px-6 py-4 bg-slate-50 rounded-xl")}
    >
      {children}
    </View>
  );
};

export default Card;
