import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, Button } from "react-native";
import Layout from "../components/Layout";
import ScrollList from "../components/ScrollList";
import ProductCard from "../components/ProductCard";
import {
  removeStorageData,
  getStorageData,
  setStorageData,
  StorageKeys,
} from "../../utils/storage";
const categories = [
  "vegetables",
  "legumes",
  "snacks",
  "meat",
  "bakery",
  "fruits",
];
const productsList = [
  {
    id: 0,
    name: "Tomato",
    origin: "Spain",
    image: "Spain",
    price: 30.0,
  },
  {
    id: 1,
    image: "Potato",
    name: "Potato",
    origin: "Portugal",
    price: 20.0,
  },
];
async function getStorageCart(
  setCart: React.Dispatch<React.SetStateAction<never[]>>
) {
  const cartData = await getStorageData(StorageKeys.products);
  if (cartData && JSON.parse(cartData).length > 0) {
    setCart(JSON.parse(cartData));
  } else {
    setCart([]);
  }
}
const Home: React.FC = () => {
  const [category, setCategory] = useState("vegetables");
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    getStorageCart(setCart);
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      setStorageData(StorageKeys.products, JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <>
      <Layout>
        <ScrollList
          categories={categories}
          currentCategory={"vegetables"}
          categoryChange={setCategory}
        />
        <View className={`border-b border-gray-300 my-3`} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 320 }}
          className="mx-5"
        >
          <Text className="text-xl font-bold">+256 products</Text>
          <Text className="text-xl font-bold">{category}</Text>
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              cart={cart}
              setCart={setCart}
              product={product}
            />
          ))}
        </ScrollView>
      </Layout>
    </>
  );
};
export default Home;
