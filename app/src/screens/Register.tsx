import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import LottieView from "lottie-react-native";
import { Input } from "react-native-elements";
import StretchedButton from "../components/StretchedButton";
import { useForm, Controller } from "react-hook-form";
import { setStorageData, StorageKeys } from "@app/utils/storage";
import { RoutesName } from "@app/config/constants";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  name: string;
  email: string;
  address: string;
}

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigation = useNavigation();

  const onSubmit = (data: FormData) => {
    if (Object.keys(errors).length === 0) {
      setStorageData(StorageKeys.isRegistered, "true");
      setStorageData(StorageKeys.name, data.name);
      setStorageData(StorageKeys.email, data.email);
      setStorageData(StorageKeys.address, data.address);
      navigation.navigate(RoutesName.home as never);
    } else {
      Alert.alert("Error", "There was an error");
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <ScrollView>
          <View className="flex items-center justify-center">
            <LottieView
              source={require("@app/assets/gifs/login.json")}
              autoPlay
              loop
              style={{ width: 400, height: 400, paddingLeft: 2 }}
            />
            <View className="-mt-8 w-80">
              <Controller
                control={control}
                name="name"
                defaultValue=""
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Name"
                    onChangeText={onChange}
                    autoCorrect={false}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.name && (
                <Text className="ml-3 -mt-4 text-right text-red-500">
                  Name is required.
                </Text>
              )}
              <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Email"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    autoCorrect={false}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.email && errors.email.type === "required" && (
                <Text className="ml-3 -mt-4 text-right text-red-500">
                  Email is required.
                </Text>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <Text className="ml-3 -mt-4 text-right text-red-500">
                  Invalid email pattern.
                </Text>
              )}
              <Controller
                control={control}
                name="address"
                defaultValue=""
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Address"
                    onChangeText={onChange}
                    autoCorrect={false}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.address && (
                <Text className="ml-3 -mt-4 text-right text-red-500">
                  Address is required.
                </Text>
              )}
              <StretchedButton
                nativeWindStyle="mt-6"
                onPress={handleSubmit(onSubmit)}
              >
                Create Account
              </StretchedButton>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
