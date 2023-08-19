import React, { useContext, useEffect, useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import { ProductContext } from "@app/context/product";
import { Categories } from "@app/interfaces/categories";
import { Product } from "@app/interfaces/products";
import { GET_CATEGORIES } from "@app/queries/categories";
import { GET_PRODUCTS } from "@app/queries/products";
import {
  getStorageData,
  setStorageData,
  StorageKeys,
} from "@app/utils/storage";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";

import Layout from "../components/Layout";
import ProductsLoader from "../components/loader/ProductsLoader";
import ProductCard from "../components/ProductCard";
import ScrollList from "../components/ScrollList";
import SearchBar from "../components/search/SearchBar";

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
  const { savedProducts, setSavedProducts } = useContext(ProductContext);
  const isHomePageFocused = useIsFocused();
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { perPage: 40 },
  });
  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const categories = categoriesData?.CategoryItems.items.map(
    (item: Categories) => item.name
  );
  const products = data?.ProductItems.items;

  useEffect(() => {
    if (category.length === 0) {
      setCategory("fruits");
    }
  }, [categories, category.length]);

  useEffect(() => {
    if (isHomePageFocused) {
      getStorageCart(setSavedProducts);
    }
  }, [isHomePageFocused, setSavedProducts]);

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
    <Layout nativeWindStyle="mt-6">
      {loading && <ProductsLoader />}
      {error && <Text>{error.toString()}</Text>}
      {data && categoriesData && (
        <>
          <SearchBar />
          <ScrollList
            nativeWindStyle="mt-4"
            categories={categories.reverse()}
            currentCategory={category}
            categoryChange={setCategory}
          />
          <View className="mt-3 border-b border-gray-300" />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 500, paddingTop: 12 }}
            className="mx-5 ">
            <Text className="text-xl font-bold">
              {filteredProducts.length} products
            </Text>
            {filteredProducts}
          </ScrollView>
        </>
      )}
    </Layout>
  );
};
export default Home;
