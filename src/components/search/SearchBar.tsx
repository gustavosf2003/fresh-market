import React, { useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SearchList from "./SearchList";

function showSearchedProducts(textLength: string) {
  if (textLength.length > 0) {
    return true;
  }
}

const SearchBar: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <View className="z-40 mx-5">
      <View className="flex flex-row items-center px-2 py-2.5 bg-gray-300">
        <FontAwesome name="search" size={20} color="gray" />
        <TextInput
          className="flex-1 ml-2"
          autoCorrect={false}
          placeholder="Password"
          value={text}
          onChangeText={setText}
        />
      </View>

      {showSearchedProducts(text) && <SearchList searchText={text} />}
    </View>
  );
};

export default SearchBar;
