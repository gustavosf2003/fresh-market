import {
  StorageKeys,
  getStorageData,
  setStorageData,
} from "@app/utils/storage";
import React, { useContext, useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Product } from "@app/interfaces/products";
import { ProductContext } from "@app/context/product";
import { businessRules } from "@app/config/constants";
import LottieView from "lottie-react-native";
import StretchedButton from "../components/StretchedButton";
import ProductCard from "../components/ProductCard";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Address from "../components/products/Address";
import Costs from "../components/products/Costs";
import Tips from "../components/products/Tips";
import Review from "../components/products/Review";
import { totalProducts } from "@app/utils/manageCart";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { appStyle } from "@app/styles";
import { sendOrder } from "@app/services/order";

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
  }, []);
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
            }}
          >
            Confirm order
          </StretchedButton>
        </View>
      )}
      <Layout>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 12,
            paddingBottom: 320,
          }}
        >
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
            <View className="flex items-center text-center mt-28">
              <LottieView
                source={require("@app/assets/gifs/phone.json")}
                autoPlay
                loop
                style={{ width: 28, height: 280 }}
              />
              <Text className="mt-10 text-2xl text-center">
                There is no saved product.
              </Text>
              <Text className="mt-2 text-2xl text-center ">
                Start saving some products
              </Text>
            </View>
          )}
        </ScrollView>
      </Layout>
    </>
  );
};

export default Products;
