import { SnackBarContext } from "@app/context/snackbar";
import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export interface SnackbarProps {
  title: string;
  undo?: boolean;
  time?: number;
}

export default function Snackbar({
  title,
  undo = true,
  time = 2500,
}: SnackbarProps) {
  const { setTitle } = useContext(SnackBarContext);
  useEffect(() => {
    setTimeout(() => {
      setTitle("");
    }, time);
  }, []);
  return (
    <View className="absolute z-20 w-full bottom-[100px]">
      <View className="flex flex-row items-center justify-between px-1 py-3.5 mx-5 mb-4 rounded-sm bg-dhr">
        <Text className="ml-3 text-white">{title}</Text>
        {undo && (
          <TouchableOpacity onPress={() => setTitle("")}>
            <Text className="mr-4 font-semibold text-primary">Undo</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
