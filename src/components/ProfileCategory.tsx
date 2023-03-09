import clsx from "clsx";
import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

interface ProfileCategoryProps {
  currentCategory: number;
  categoryChange: React.Dispatch<React.SetStateAction<number>>;
}
const profileCategories = [
  {
    id: 0,
    name: "Profile",
    image: require("@app/assets/edit-user.png"),
  },
  {
    id: 1,
    name: "Orders",
    image: require("@app/assets/checklist.png"),
  },
  {
    id: 2,
    name: "Discounts",
    image: require("@app/assets/discount.png"),
  },
];
const ProfileCategory = ({
  currentCategory,
  categoryChange,
}: ProfileCategoryProps) => {
  return (
    <View className="flex flex-row items-center justify-center">
      {profileCategories.map((item) => (
        <View className={clsx("p-4 basis-1/3")} key={item.id}>
          <TouchableOpacity
            onPress={() => categoryChange(item.id)}
            className={clsx(
              "flex items-center p-4  rounded-lg",
              currentCategory == item.id ? "bg-slate-300" : "bg-slate-200"
            )}
          >
            <Image className="w-12 h-12" source={item.image} />
            <Text className="mt-2">{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ProfileCategory;
