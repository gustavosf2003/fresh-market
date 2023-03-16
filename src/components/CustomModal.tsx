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
    <Modal onBackdropPress={toggleModal} isVisible={isOpen}>
      <View className="rounded-md bg-slate-200 h-2/3">
        <View className="flex flex-row items-center justify-between px-4 pt-4 pb-3 bg-white border-b border-gray-400 rounded-md">
          <Text className="text-xl ">{title}</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Ionicons name="close" size={28} color={appStyle.iconColor} />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
