import React from "react";
import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import OrderCard from "./OrderCard";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { RoutesName } from "@app/config/constants";

const Orders: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View className="flex ">
      <Text className="mb-8 text-2xl font-bold">Last Orders</Text>
      <ScrollView>
        <OrderCard />
        <OrderCard />
      </ScrollView>
      {/* <View className="flex items-center justify-center mt-8">
        <LottieView
          source={require("@app/assets/gifs/empty-cart.json")}
          autoPlay
          loop
          style={{ width: 280, height: 280 }}
        />
        <Text className="mt-10 text-lg">You didn't ordered yet</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(RoutesName.home as never)}
        >
          <Text className="mt-1.5 text-xl font-semibold underline text-primary">
            Start shopping now
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Orders;
