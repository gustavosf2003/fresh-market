import React, { useRef, useState } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchList from "./SearchList";

function showSearchedProducts(textLength: number): boolean {
  return textLength > 0;
}
interface SearchTextFieldProps {
  textFieldValue: string;
  setTextFieldValue: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBar: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <View className="z-40 mx-5">
      <SearchTextField textFieldValue={text} setTextFieldValue={setText} />
      {showSearchedProducts(text.length) && <SearchList searchText={text} />}
    </View>
  );
};

const SearchTextField = ({
  textFieldValue,
  setTextFieldValue,
}: SearchTextFieldProps) => {
  const inputRef = useRef<TextInput>(null);
  const [focus, setFocused] = useState(false);
  return (
    <View className="flex flex-row items-center px-2 py-2.5 bg-gray-300">
      {focus ? (
        <Ionicons
          name="arrow-back"
          size={20}
          color="gray"
          onPress={() => {
            inputRef.current!.blur();
            setTextFieldValue("");
            setFocused(false);
          }}
        />
      ) : (
        <Ionicons name="search" size={20} color="gray" />
      )}
      <TextInput
        ref={inputRef}
        className="flex-1 ml-2"
        autoCorrect={false}
        placeholder="Search"
        value={textFieldValue}
        onChangeText={setTextFieldValue}
        onFocus={() => setFocused(true)}
      />
      {textFieldValue.length > 0 && (
        <Ionicons
          name="close"
          size={20}
          color="gray"
          onPress={() => {
            setTextFieldValue("");
          }}
        />
      )}
    </View>
  );
};

export default SearchBar;
