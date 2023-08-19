import React, { useEffect, useState } from "react";

import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Geocoder from "react-native-geocoding";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

interface Location {
  lat: number;
  lng: number;
}
interface MapComponentProps {
  address: string;
}

const MapComponent = ({ address }: MapComponentProps) => {
  const [location, setLocation] = useState<Location | undefined>(undefined);

  useEffect(() => {
    Geocoder.from(address)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation({ lat: lat, lng: lng });
      })
      .catch((error) => console.warn(error));
  }, [address]);

  if (!location) {
    return (
      <View className="flex items-center justify-center h-40 mt-3 bg-gray-300 rounded-xl">
        <View className="flex flex-row items-center">
          <Feather name="info" size={24} color="gray" />
          <Text className="ml-3 text-lg font-medium text-gray-600">
            Failed to load map
          </Text>
        </View>
      </View>
    );
  }

  return (
    <MapView
      style={{ height: "100%", width: "100%", borderRadius: 12, marginTop: 12 }}
      initialRegion={{
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.02,
      }}
      scrollEnabled={false}>
      <Marker
        coordinate={{
          latitude: location.lat,
          longitude: location.lng,
        }}
      />
    </MapView>
  );
};

export default MapComponent;
