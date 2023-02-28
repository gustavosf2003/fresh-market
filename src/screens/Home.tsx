import React, { createContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import Layout from "../components/Layout";
import ScrollList from "../components/ScrollList";
import ProductCard from "../components/ProductCard";
import {
  getStorageData,
  setStorageData,
  StorageKeys,
} from "@app/utils/storage";
import { Product } from "@app/interfaces/products";
import { ProductContext } from "@app/context/product";
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
  const [savedProducts, setSavedProducts] = useState([]);
  useEffect(() => {
    getStorageCart(setSavedProducts);
  }, []);
  console.log(savedProducts);
  useEffect(() => {
    if (savedProducts.length > 0) {
      setStorageData(StorageKeys.products, JSON.stringify(savedProducts));
    }
  }, [savedProducts]);
  return (
    <>
      <ProductContext.Provider value={{ savedProducts, setSavedProducts }}>
        <Layout nativeWindStyle="mt-6">
          <ScrollList
            categories={categories}
            currentCategory={"vegetables"}
            categoryChange={setCategory}
          />
          <View className={`border-b border-gray-300 my-3`} />
          <Button
            onPress={() => setStorageData(StorageKeys.products, "[]")}
            title="clear"
          ></Button>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 320 }}
            className="mx-5"
          >
            <Text className="text-xl font-bold">+256 products</Text>
            <Text className="text-xl font-bold">{category}</Text>
            {productsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ScrollView>
        </Layout>
      </ProductContext.Provider>
    </>
  );
};
export default Home;
