/// <reference types="nativewind/types" />
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./config/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
