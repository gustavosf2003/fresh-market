import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import Layout from "../components/Layout";
import ScrollList from "../components/ScrollList";
const Home: React.FC = () => {
  const [category, setCategory] = useState("vegetables");
  const categories = [
    "vegetables",
    "legumes",
    "snacks",
    "meat",
    "bakery",
    "fruits",
  ];
  return (
    <>
      <Layout>
        <ScrollList
          categories={categories}
          currentCategory={"vegetables"}
          categoryChange={setCategory}
        />
        <View className={`border-b border-gray-300 my-3`} />
        <View className="mx-5">
          <Text className="text-xl font-bold">290+ Results</Text>
          <Text className="text-xl font-bold">{category}</Text>
        </View>
      </Layout>
    </>
  );
};
export default Home;
