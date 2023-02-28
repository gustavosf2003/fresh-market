import React from "react";
import { View, Text } from "react-native";
import Card from "../Card";
import { Feather } from "@expo/vector-icons";
import { appStyle } from "@app/styles";

interface AddressProps {
  minTime: number;
  maxTime: number;
  address: string;
}

const Address = ({ minTime, maxTime, address }: AddressProps) => {
  const parsedAddress = `${minTime}-${maxTime} min`;
  return (
    <Card>
      <View className="flex flex-row items-center gap-3 ">
        <Feather name="clock" size={24} color={appStyle.iconColor} />
        <Text className="text-lg">{parsedAddress}</Text>
      </View>
      <View className={`border-b border-gray-300 my-3`} />
      <View className="flex flex-row items-center gap-3 ">
        <Feather name="map-pin" size={24} color={appStyle.iconColor} />
        <Text className="text-lg">{address}</Text>
      </View>
      <View className="h-40 mt-3 bg-gray-300 rounded-xl"></View>
    </Card>
  );
};

export default Address;
