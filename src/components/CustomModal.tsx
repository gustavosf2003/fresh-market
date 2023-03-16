import React, { ReactElement, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { appStyle } from "@app/styles";
import Counter from "./Counter";

interface CustomModalProps {
  isOpen: boolean;
  children: ReactElement;
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomModal = ({
  isOpen,
  setIsOpen,
  title,
  children,
}: CustomModalProps) => {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View className="bg-white">
      <Modal
        style={{
          width: "100%",
          position: "absolute",
          marginBottom: -20,
          backgroundColor: "#e2e8f0",
          bottom: 0,
          left: 0,
          marginLeft: 0,
        }}
        onBackdropPress={toggleModal}
        isVisible={isOpen}
      >
        <View className="rounded-md">
          <View className="flex flex-row items-center justify-between px-4 pt-4 pb-3 bg-white rounded-lg">
            <Text className="text-2xl font-bold">{title}</Text>
            <TouchableOpacity
              onPress={toggleModal}
              className="p-1 rounded-full bg-slate-200"
            >
              <Ionicons name="close" size={28} color={appStyle.iconColor} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
