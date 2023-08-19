import React from "react";
import { useEffect } from "react";

import { RoutesName } from "@app/config/constants";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";

import Layout from "../components/Layout";

const waitingTime = 5000;

const ProcessingOrder: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(RoutesName.home as never); // replace 'Home' with the name of your destination screen
    }, waitingTime);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Layout bottomBar={false}>
      <View className="flex flex-col items-center justify-center mt-20">
        <LottieView
          source={require("@app/assets/gifs/processing.json")}
          autoPlay
          loop
          style={{ width: 360, height: 360 }}
        />
        <Text className="text-3xl font-bold">Wait a second</Text>
        <Text className="mt-2 text-lg font-medium">
          We are processing your order
        </Text>
      </View>
    </Layout>
  );
};

export default ProcessingOrder;
