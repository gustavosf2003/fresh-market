import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import Layout from "../components/Layout";
import ScrollList from "../components/ScrollList";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "@app/queries/products";
import {
  getStorageData,
  setStorageData,
  StorageKeys,
} from "@app/utils/storage";
import { Product } from "@app/interfaces/products";
import { ProductContext } from "@app/context/product";
import { useIsFocused } from "@react-navigation/native";

const categories = ["fruits", "vegetables", "fish", "meat", "bakery"];

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
  const isHomePageFocused = useIsFocused();
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const products = data?.ProductItems.items;

  useEffect(() => {
    if (isHomePageFocused) {
      getStorageCart(setSavedProducts);
    }
  }, [isHomePageFocused]);
  useEffect(() => {
    setStorageData(StorageKeys.products, JSON.stringify(savedProducts));
  }, [savedProducts]);

  return (
    <>
      <ProductContext.Provider value={{ savedProducts, setSavedProducts }}>
        <Layout nativeWindStyle="mt-6">
          {loading && <Text>Loading</Text>}
          {data && (
            <>
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
                {products
                  .filter(
                    (product: Product) =>
                      product.content.category.name === category
                  )
                  .map((product: Product) => (
                    <ProductCard key={product.id} product={product.content} />
                  ))}
              </ScrollView>
            </>
          )}
        </Layout>
      </ProductContext.Provider>
    </>
  );
};
export default Home;
