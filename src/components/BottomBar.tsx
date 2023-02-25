import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { clsx } from "clsx";
import { FontAwesome } from "@expo/vector-icons";
import { appStyle } from "../../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RoutesName } from "@app/config/constants";

interface BottomBarIconProps {
  icon: any;
  onPress: any;
  active?: boolean;
}

const BottomBarIcon = ({ icon, onPress, active }: BottomBarIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex items-center w-10 ">
      {icon == "shopping-basket" ? (
        <FontAwesome name={icon} size={24} color={appStyle.iconColor} />
      ) : (
        <Feather name={icon} size={24} color={appStyle.iconColor} />
      )}
      <View
        className={clsx(
          "h-1.5 mt-1.5 rounded-sm w-8",
          active ? "bg-primary" : null
        )}
      ></View>
    </TouchableOpacity>
  );
};

function isCurrentRoute(routeName: string) {
  const route = useRoute();
  return route.name == routeName;
}

const BottomBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="absolute bottom-0 left-0 right-0 bg-primaryWhite">
        <View className="flex flex-row items-center justify-between px-12 py-4">
          <BottomBarIcon
            icon="grid"
            onPress={() => navigation.navigate(RoutesName.home as never)}
            active={isCurrentRoute(RoutesName.home)}
          ></BottomBarIcon>
          <BottomBarIcon
            icon="shopping-basket"
            onPress={() => navigation.navigate(RoutesName.products as never)}
            active={isCurrentRoute(RoutesName.products)}
          ></BottomBarIcon>
          <BottomBarIcon
            icon="user"
            onPress={() => navigation.navigate(RoutesName.user as never)}
            active={isCurrentRoute(RoutesName.user)}
          ></BottomBarIcon>
        </View>
      </SafeAreaView>
    </>
  );
};

export default BottomBar;
