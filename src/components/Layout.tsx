import React, { PropsWithChildren } from "react";
import { View, Text, ScrollView } from "react-native";
import BottomBar from "./BottomBar";
import AppBar from "./AppBar";
import { clsx } from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  nativeWindStyle?: string;
  bottomBar?: boolean;
}

const Layout = ({
  children,
  nativeWindStyle,
  bottomBar = true,
}: LayoutProps) => {
  return (
    <>
      <AppBar />
      <View className={clsx(nativeWindStyle)}>{children}</View>
      {bottomBar && <BottomBar />}
    </>
  );
};

export default Layout;
