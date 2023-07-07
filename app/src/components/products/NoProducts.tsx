import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function NoProducts() {
  return (
    <View className="flex items-center text-center mt-28">
      <LottieView
        source={require("@app/assets/gifs/phone.json")}
        autoPlay
        loop
        style={{ width: 28, height: 280 }}
      />
      <Text className="mt-10 text-2xl text-center">
        There is no saved product.
      </Text>
      <Text className="mt-2 text-2xl text-center ">
        Start saving some products
      </Text>
    </View>
  );
}
