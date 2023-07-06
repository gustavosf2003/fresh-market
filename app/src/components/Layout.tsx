import React, { PropsWithChildren, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import BottomBar from "./BottomBar";
import AppBar from "./AppBar";
import { clsx } from "clsx";
import { FontAwesome } from "@expo/vector-icons";
import Snackbar from "./Snackbar";
import { SnackBarContext } from "../../context/snackbar";

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
  const [title, setTitle] = useState("");
  return (
    <>
      <SnackBarContext.Provider value={{ title, setTitle }}>
        {title.length > 0 && <Snackbar title={title} />}
        <AppBar />
        <View className={nativeWindStyle}>{children}</View>
        {bottomBar && <BottomBar />}
      </SnackBarContext.Provider>
    </>
  );
};

export default Layout;
