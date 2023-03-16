import React from "react";
import { View, Text, Pressable, GestureResponderEvent } from "react-native";

interface CounterProps {
  counter: number;
  removeItem: ((event: GestureResponderEvent) => void) | null | undefined;
  addItem: ((event: GestureResponderEvent) => void) | null | undefined;
}

const Counter = ({ counter, removeItem, addItem }: CounterProps) => {
  return (
    <View className="flex flex-row items-center self-center bg-gray-300 rounded-full">
      {counter > 0 && (
        <>
          <Pressable className="px-3 py-1.5" onPress={removeItem}>
            <Text className="text-xl">-</Text>
          </Pressable>
          <Text className="ml-3 text-lg ">{counter}</Text>
        </>
      )}
      <Pressable
        className={
          counter > 0
            ? "ml-3 py-1.5 px-3 "
            : " w-10 h-10 flex items-center justify-center"
        }
        onPress={addItem}
      >
        <Text className="text-xl">+</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
