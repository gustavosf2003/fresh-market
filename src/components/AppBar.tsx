import React, { useEffect } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import { appStyle } from "../../styles";
import { useFonts } from "expo-font";
import { RoutesName } from "../../config/routes";

const AppBar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  let [fontsLoaded] = useFonts({
    Caveat: require("../../assets/fonts/Caveat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{ backgroundColor: appStyle.backgroundColor }}
      className="mb-6"
    >
      <View className="flex flex-row items-center justify-between px-5 py-3 bg-primary">
        <Text
          className="text-4xl text-white basis-1/2"
          style={{ fontFamily: "Caveat" }}
        >
          Fresh Market
        </Text>
        {route.name != RoutesName.products && (
          <FontAwesome
            onPress={() => navigation.navigate(RoutesName.products as never)}
            name="shopping-basket"
            size={24}
            color="white"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
