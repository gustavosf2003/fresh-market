import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";

import { useState, useEffect } from "react";
import { StorageKeys, getStorageData } from "@app/utils/storage";
import { setStorageData } from "../../utils/storage";
import TextField from "./TextField";

const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchSavedProducts = async () => {
      const savedName = await getStorageData(StorageKeys.name);
      const savedEmail = await getStorageData(StorageKeys.email);
      const savedAddress = await getStorageData(StorageKeys.address);
      if (savedName && savedEmail && savedAddress) {
        setName(savedName);
        setEmail(savedEmail);
        setAddress(savedAddress);
      }
    };
    fetchSavedProducts();
  }, []);

  return (
    <View>
      <View className="flex flex-row items-center gap-4">
        <Image source={require("@app/assets/user.png")} className="w-10 h-10" />
        <Text className="text-2xl font-bold">{name}</Text>
      </View>
      <ScrollView className="-mx-2.5 mt-8">
        <TextField
          label="Name"
          defaultValue={name}
          onType={(value) => {
            setName(value);
            setStorageData(StorageKeys.name, value);
          }}
        />
        <TextField
          label="Email"
          defaultValue={email}
          onType={(value) => {
            setEmail(value);
            setStorageData(StorageKeys.email, value);
          }}
        />
        <TextField
          label="Address"
          defaultValue={address}
          onType={(value) => {
            setAddress(value);
            setStorageData(StorageKeys.address, value);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
