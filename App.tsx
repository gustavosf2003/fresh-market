/// <reference types="nativewind/types" />
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./config/routes";
export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
