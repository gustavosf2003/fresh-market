import React, { useContext, useEffect, useState } from "react";

import { businessRules } from "@app/config/constants";
import { ProductContext } from "@app/context/product";
import { sendOrder } from "@app/services/order";
import { appStyle } from "@app/styles";
import { totalProducts } from "@app/utils/manageCart";
import {
  StorageKeys,
  getStorageData,
  setStorageData,
} from "@app/utils/storage";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

import Card from "../components/Card";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import Address from "../components/products/Address";
import Costs from "../components/products/Costs";
import NoProducts from "../components/products/NoProducts";
import Review from "../components/products/Review";
import Tips from "../components/products/Tips";
import StretchedButton from "../components/StretchedButton";

const Products: React.FC = () => {
  const { savedProducts, setSavedProducts } = useContext(ProductContext);
  const [tipValue, setTipValue] = useState(0);
  const [address, setAddress] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const fetchSavedProducts = async () => {
      const data = await getStorageData(StorageKeys.products);
      const localAddress = await getStorageData(StorageKeys.address);
      if (data && localAddress) {
        setAddress(localAddress);
        setSavedProducts(JSON.parse(data));
      }
    };
    fetchSavedProducts();
  }, [setSavedProducts]);
  useEffect(() => {
    setStorageData(StorageKeys.products, JSON.stringify(savedProducts));
  }, [savedProducts]);

  return (
    <>
      {savedProducts.length > 0 && (
        <View className="absolute z-20 w-full h-12 px-4 bottom-32">
          <StretchedButton
            onPress={() => {
              sendOrder(
                navigation,
                savedProducts,
                tipValue,
                businessRules.deliveryFee,
                0
              );
            }}>
            Confirm order
          </StretchedButton>
        </View>
      )}
      <Layout>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 12,
            paddingBottom: 320,
          }}>
          {savedProducts.length > 0 ? (
            <>
              <Card>
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-2xl font-semibold">Your Order</Text>
                  <TouchableOpacity onPress={() => setSavedProducts([])}>
                    <Feather
                      name="trash-2"
                      size={24}
                      color={appStyle.iconColor}
                    />
                  </TouchableOpacity>
                </View>
                <Text className="mt-1">
                  {totalProducts(savedProducts)} Products
                </Text>
                {savedProducts &&
                  savedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      quantity={product.content.quantity}
                      showDynamicPrice
                    />
                  ))}
              </Card>
              <Costs
                deliveryFee={businessRules.deliveryFee + tipValue}
                discount={0}
                savedProducts={savedProducts}
              />
              <Tips setTip={setTipValue} tip={tipValue} />
              {address.length > 0 && (
                <Address minTime={20} maxTime={25} address={address} />
              )}
              <Review products={savedProducts} tips={tipValue} />
            </>
          ) : (
            <NoProducts />
          )}
        </ScrollView>
      </Layout>
    </>
  );
};

export default Products;
