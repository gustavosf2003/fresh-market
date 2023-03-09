import AsyncStorage from "@react-native-async-storage/async-storage";

export const StorageKeys = {
  products: "products",
  name: "name",
  email: "email",
  address: "address",
  isRegistered: "registered",
};

export const setStorageData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getStorageData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue;
  } catch (error) {
    console.log(error);
  }
};

export const removeStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
