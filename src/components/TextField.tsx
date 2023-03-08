import React, { useRef } from "react";
import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { Input } from "react-native-elements";
interface TextFieldProps {
  label: string;
  defaultValue: string;
  onType: (value: string) => void;
}
const TextField = ({
  label,
  defaultValue,
  onType,
  ...props
}: TextFieldProps) => {
  return (
    <Input
      label={label}
      defaultValue={defaultValue}
      onChangeText={onType}
      {...props}
    />
  );
};

export default TextField;
