import React, { PropsWithChildren } from "react";
import { View, Text, ScrollView } from "react-native";
import BottomBar from "./BottomBar";
import AppBar from "./AppBar";
import { clsx } from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  nativeWindStyle?: string;
}

const Layout = ({ children, nativeWindStyle }: LayoutProps) => {
  return (
    <>
      <AppBar />
      <View className={clsx(nativeWindStyle)}>{children}</View>
      <BottomBar />
    </>
  );
};

export default Layout;
