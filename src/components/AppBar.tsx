import React, { useContext, useEffect } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { appStyle } from "@app/styles";
import { useFonts } from "expo-font";
import { RoutesName } from "@app/config/constants";
import { ProductContext } from "@app/context/product";
import { totalProducts } from "@app/utils/manageCart";

const AppBar: React.FC = () => {
  const { savedProducts } = useContext(ProductContext);
  const navigation = useNavigation();
  const route = useRoute();
  let [fontsLoaded] = useFonts({
    Caveat: require("@app/assets/fonts/Caveat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const productQuantity = totalProducts(savedProducts);
  return (
    <SafeAreaView style={{ backgroundColor: appStyle.backgroundColor }}>
      <View className="flex flex-row items-center justify-between px-5 py-3 bg-primary">
        <Text
          className="text-4xl text-white basis-1/2"
          style={{ fontFamily: "Caveat" }}
        >
          Fresh Market
        </Text>
        <View>
          {route.name !== RoutesName.products &&
            route.name !== RoutesName.processing && (
              <>
                <FontAwesome
                  onPress={() =>
                    navigation.navigate(RoutesName.products as never)
                  }
                  name="shopping-basket"
                  size={24}
                  color="white"
                />
                {productQuantity !== 0 && (
                  <View className="absolute flex items-center  py-1 font-semibold text-white bg-red-400 rounded-full -top-3.5 -right-3.5 w-6 h-6">
                    <Text className="text-xs font-semibold text-white break-words">
                      {productQuantity}
                    </Text>
                  </View>
                )}
              </>
            )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
