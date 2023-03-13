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
import { GET_CATEGORIES } from "@app/queries/categories";
import { Categories } from "@app/interfaces/categories";
import ProductsLoader from "../components/loader/ProductsLoader";

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
  const [category, setCategory] = useState("");
  const [savedProducts, setSavedProducts] = useState([]);
  const isHomePageFocused = useIsFocused();
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = useQuery(GET_CATEGORIES);
  const categories = categoriesData?.CategoryItems.items.map(
    (item: Categories) => item.name
  );
  const products = data?.ProductItems.items;

  useEffect(() => {
    if (category.length == 0) {
      setCategory("fruits");
    }
  }, [categories]);

  useEffect(() => {
    if (isHomePageFocused) {
      getStorageCart(setSavedProducts);
    }
  }, [isHomePageFocused]);
  useEffect(() => {
    setStorageData(StorageKeys.products, JSON.stringify(savedProducts));
  }, [savedProducts]);

  let filteredProducts;
  if (data) {
    filteredProducts = products
      .filter((product: Product) => product.content.category.name === category)
      .map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ));
  }
  return (
    <ProductContext.Provider value={{ savedProducts, setSavedProducts }}>
      <Layout nativeWindStyle="mt-6">
        {loading && <ProductsLoader />}
        {error && <Text>{error.toString()}</Text>}
        {data && categoriesData && (
          <>
            <ScrollList
              categories={categories.reverse()}
              currentCategory={category}
              categoryChange={setCategory}
            />
            <View className="mt-3 border-b border-gray-300" />

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 320, paddingTop: 24 }}
              className="mx-5"
            >
              <Text className="text-xl font-bold">
                {filteredProducts.length} products
              </Text>
              {filteredProducts}
            </ScrollView>
          </>
        )}
      </Layout>
    </ProductContext.Provider>
  );
};
export default Home;
