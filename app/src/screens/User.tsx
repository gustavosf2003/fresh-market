import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Layout from '../components/Layout';
import ProfileCategory from '../components/ProfileCategory';
import AboutUs from '../components/AboutUs';
import ProfileForm from '../components/ProfileForm';
import Orders from '../components/Orders';

enum Categories {
  Profile = 0,
  Orders = 1,
  AboutUs = 2,
}

function getPageContent(category: Categories) {
  switch (category) {
    case Categories.Profile:
      return <ProfileForm />;
    case Categories.Orders:
      return <Orders />;
    case Categories.AboutUs:
      return <AboutUs />;
    default:
      return <ProfileForm />;
  }
}

const User: React.FC = () => {
  const [profileCategory, setProfileCategory] = useState(Categories.Profile);
  return (
    <Layout>
      <ProfileCategory currentCategory={profileCategory} categoryChange={setProfileCategory} />
      <View className="border-b border-gray-300" />
      <View className="mx-8 mt-4">{getPageContent(profileCategory)}</View>
    </Layout>
  );
};

export default User;
