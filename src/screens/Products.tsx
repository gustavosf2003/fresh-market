import {
  StorageKeys,
  getStorageData,
  setStorageData,
} from "@app/utils/storage";
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Product } from "../../interfaces/products";
import { ProductContext } from "@app/context/product";
import { businessRules } from "../../config/constants";
import LottieView from "lottie-react-native";
import { calculateTotalCost } from "@app/utils/prices";
import StretchedButton from "../components/StretchedButton";
import ProductCard from "../components/ProductCard";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Address from "../components/products/Address";
import Costs from "../components/products/Costs";
import Tips from "../components/products/Tips";
import Review from "../components/products/Review";
const Products: React.FC = () => {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);
  const [tipValue, setTipValue] = useState(0);
  console.log(tipValue);
  useEffect(() => {
    const fetchSavedProducts = async () => {
      const data = await getStorageData(StorageKeys.products);
      if (data) {
        setSavedProducts(JSON.parse(data));
      }
    };
    fetchSavedProducts();
  }, []);
  useEffect(() => {
    setStorageData(StorageKeys.products, JSON.stringify(savedProducts));
  }, [savedProducts]);
  const totalProducts = savedProducts.reduce(
    (acc: number, curr: Product) => acc + (curr.quantity || 0),
    0
  );
  const subtotal = savedProducts.reduce(
    (acc: number, curr: Product) => acc * (curr.price || 0),
    0
  );
  return (
    <>
      <ProductContext.Provider value={{ savedProducts, setSavedProducts }}>
        {savedProducts.length > 0 && (
          <View className="absolute z-20 w-full h-12 px-4 bottom-32">
            <StretchedButton onPress={() => console.log("Order done")}>
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
              <View>
                <Card>
                  <Text className="text-2xl font-semibold">Your Order</Text>
                  <Text className="mt-1">{totalProducts} Products</Text>
                  {savedProducts &&
                    savedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        quantity={product.quantity}
                        showDynamicPrice
                      />
                    ))}
                </Card>
                <Costs
                  deliveryFee={businessRules.deliveryFee}
                  discount={0}
                  savedProducts={savedProducts}
                />
                <Address
                  minTime={20}
                  maxTime={25}
                  address="Rua João Do Nascimento Costa n 1"
                />
                <Tips setTip={setTipValue} tip={tipValue} />
                <Review products={savedProducts} />
              </View>
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
      </ProductContext.Provider>
    </>
  );
};

export default Products;
