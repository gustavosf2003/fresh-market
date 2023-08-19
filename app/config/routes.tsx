import React from "react";
import { useState, useEffect } from "react";

import { RoutesName } from "@app/config/constants";
import ProcessingOrder from "@app/src/screens/ProcessingOrder";
import Register from "@app/src/screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../src/screens/Home";
import Products from "../src/screens/Products";
import User from "../src/screens/User";
import { getStorageData, StorageKeys } from "../utils/storage";

async function checkRegistration(): Promise<boolean> {
  const isRegistered = await getStorageData(StorageKeys.isRegistered);
  return Boolean(isRegistered);
}
const Stack = createNativeStackNavigator();
const Routes = () => {
  const [initialRouteName, setInitialRouteName] = useState("");

  useEffect(() => {
    async function determineInitialRouteName() {
      const isRegistered = await checkRegistration();
      setInitialRouteName(isRegistered ? RoutesName.home : RoutesName.register);
    }

    determineInitialRouteName();
  }, []);
  return (
    initialRouteName.length > 0 && (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}>
        <Stack.Screen name={RoutesName.home} component={Home} />
        <Stack.Screen name={RoutesName.register} component={Register} />
        <Stack.Screen name={RoutesName.products} component={Products} />
        <Stack.Screen
          name={RoutesName.processing}
          component={ProcessingOrder}
        />
        <Stack.Screen name={RoutesName.user} component={User} />
      </Stack.Navigator>
    )
  );
};

export default Routes;
