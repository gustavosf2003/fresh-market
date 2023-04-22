/// <reference types="nativewind/types" />
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./config/routes";
import { GOOGLE_MAPS_TOKEN } from "@env";
import Geocoder from "react-native-geocoding";
import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { storyBlokClient } from "./services/api";
import { ThemeProvider } from "react-native-elements";
import { ProductContext } from "./context/product";
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
