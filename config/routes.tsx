import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../src/screens/Home";
import Products from "../src/screens/Products";
import User from "../src/screens/User";
import { RoutesName } from "@app/config/constants";
import Register from "@app/src/screens/Register";
import { getStorageData, StorageKeys } from "../utils/storage";
import { useState, useEffect } from "react";

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
        }}
      >
        <Stack.Screen name={RoutesName.home} component={Home} />
        <Stack.Screen name={RoutesName.register} component={Register} />
        <Stack.Screen name={RoutesName.products} component={Products} />
        <Stack.Screen name={RoutesName.user} component={User} />
      </Stack.Navigator>
    )
  );
};

export default Routes;
