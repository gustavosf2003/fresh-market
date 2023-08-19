import React, { useState } from "react";

import { View } from "react-native";

import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import Orders from "../components/Orders";
import ProfileCategory from "../components/ProfileCategory";
import ProfileForm from "../components/ProfileForm";

enum Categories {
  Profile = 0,
  OrdersCategory = 1,
  AboutUsCategory = 2,
}

function getPageContent(category: Categories) {
  switch (category) {
    case Categories.Profile:
      return <ProfileForm />;
    case Categories.OrdersCategory:
      return <Orders />;
    case Categories.AboutUsCategory:
      return <AboutUs />;
    default:
      return <ProfileForm />;
  }
}

const User: React.FC = () => {
  const [profileCategory, setProfileCategory] = useState(Categories.Profile);
  return (
    <Layout>
      <ProfileCategory
        currentCategory={profileCategory}
        categoryChange={setProfileCategory}
      />
      <View className="border-b border-gray-300" />
      <View className="mx-8 mt-4">{getPageContent(profileCategory)}</View>
    </Layout>
  );
};

export default User;
