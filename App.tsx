/// <reference types="nativewind/types" />
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./config/routes";
import { GOOGLE_MAPS_TOKEN } from "@env";
import Geocoder from "react-native-geocoding";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { storyBlokClient } from "./services/api";

export default function App() {
  Geocoder.init(GOOGLE_MAPS_TOKEN);
  return (
    <ApolloProvider client={storyBlokClient}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
}
