import React, { PropsWithChildren } from "react";
import { View, Text } from "react-native";
import BottomBar from "./BottomBar";
import AppBar from "./AppBar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AppBar />
      {children}
      <BottomBar />
    </>
  );
};

export default Layout;
