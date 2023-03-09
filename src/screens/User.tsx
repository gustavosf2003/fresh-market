import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Layout from "../components/Layout";
import ProfileCategory from "../components/ProfileCategory";
import ProfileForm from "../components/ProfileForm";
import Orders from "../components/Orders";
import Discounts from "../components/Discounts";

function getPageContent(category: number) {
  switch (category) {
    case 0:
      return <ProfileForm />;
    case 1:
      return <Orders />;
    case 2:
      return <Discounts />;
    default:
      return <ProfileForm />;
  }
}

const User: React.FC = () => {
  const [profileCategory, setProfileCategory] = useState(0);
  return (
    <Layout>
      <ProfileCategory
        currentCategory={profileCategory}
        categoryChange={setProfileCategory}
      />
      <View className={`border-b border-gray-300`} />
      <View className="mx-8 mt-4">{getPageContent(profileCategory)}</View>
    </Layout>
  );
};

export default User;
