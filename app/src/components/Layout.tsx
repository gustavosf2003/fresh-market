import React, { useState } from "react";

import { View } from "react-native";

import AppBar from "./AppBar";
import BottomBar from "./BottomBar";
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
