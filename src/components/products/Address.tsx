import React from "react";
import { View, Text } from "react-native";
import Card from "../Card";
import { Feather } from "@expo/vector-icons";
import { appStyle } from "@app/styles";
import MapComponent from "../MapComponent";

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
      <View className="h-48">
        <MapComponent address="Rua Joao do Nascimento Costa n 1" />
      </View>
    </Card>
  );
};

export default Address;
