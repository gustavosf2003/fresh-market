import React from "react";

import { businessRules } from "@app/config/constants";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";

import Badge from "../Badge";
import Card from "../Card";

interface TipProps {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}

const Tips = ({ tip, setTip }: TipProps) => {
  const tips = businessRules.tips;
  return (
    <Card>
      <View className="flex flex-row items-center ">
        <LottieView
          source={require("@app/assets/gifs/delivery.json")}
          autoPlay
          loop
          style={{ width: 80, height: 80 }}
        />
        <View className="ml-2">
          <Text className="text-lg font-medium">
            Add a tip for the delivery?
          </Text>
          <Text>Help us to make this even better</Text>
        </View>
      </View>
      <View className="flex flex-row mt-2 ml-3">
        {tips.map((item) => {
          if (item === 0) {
            return (
              <Badge
                key={item}
                title="No"
                active={tip === item}
                badgeChange={() => setTip(0)}
              />
            );
          }
          return (
            <Badge
              key={item}
              title={item.toString()}
              active={tip === item}
              badgeChange={() => setTip(item)}
            />
          );
        })}
      </View>
    </Card>
  );
};

export default Tips;
