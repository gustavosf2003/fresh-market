import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../src/screens/Home";
import Products from "../src/screens/Products";
import User from "../src/screens/User";
import { RoutesName } from "@app/config/constants";

const Stack = createNativeStackNavigator();
const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RoutesName.home}
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Stack.Screen name={RoutesName.home} component={Home} />
      <Stack.Screen name={RoutesName.products} component={Products} />
      <Stack.Screen name={RoutesName.user} component={User} />
    </Stack.Navigator>
  );
};

export default Routes;
