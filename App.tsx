/// <reference types="nativewind/types" />
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./config/routes";
import { GOOGLE_MAPS_TOKEN } from "@env";
import Geocoder from "react-native-geocoding";
import React from "react";

export default function App() {
  Geocoder.init(GOOGLE_MAPS_TOKEN);
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
