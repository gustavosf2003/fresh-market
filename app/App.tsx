/// <reference types="nativewind/types" />
import React, { useState } from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import { GOOGLE_MAPS_TOKEN } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import Geocoder from "react-native-geocoding";

import Routes from "./config/routes";
import { ProductContext } from "./context/product";
import { storyBlokClient } from "./services/api";
export default function App() {
  Geocoder.init(GOOGLE_MAPS_TOKEN);

  const [savedProducts, setSavedProducts] = useState([]);
  return (
    <ApolloProvider client={storyBlokClient}>
      <ThemeProvider>
        <NavigationContainer>
          <ProductContext.Provider value={{ savedProducts, setSavedProducts }}>
            <Routes />
          </ProductContext.Provider>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}
