import Layout from "../components/Layout";
import { StorageKeys, getStorageData } from "../../utils/storage";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { Product } from "../../interfaces/products";
import Badge from "../components/Badge";
const Products: React.FC = () => {
  const [savedProducts, setSavedProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    const fetchSavedProducts = async () => {
      const data = await getStorageData(StorageKeys.products);
      if (data) {
        setSavedProducts(JSON.parse(data));
      }
    };
    fetchSavedProducts();
  }, []);

  return (
    <>
      <Layout>
        <View className="h-full ">
          <View className="px-6 py-2 bg-slate-100 rounded-xl">
            <Text>Your Order</Text>
            <Text>X Products</Text>
            {savedProducts &&
              savedProducts.map((product) => (
                <Text key={product.id}>{product.id}</Text>
              ))}
          </View>
          <View className="px-6 py-3 mt-3 bg-slate-100 rounded-xl">
            <Text>Discount</Text>
            <Text>Subtotal</Text>
            <Text>Delivery fee</Text>
            <Text>X Products</Text>
            <Text>Total</Text>
          </View>
          <View className="px-6 pt-3 pb-4 mt-3 bg-slate-100 rounded-xl">
            <Text>Time</Text>
            <Text>Addredd</Text>
            <View className="h-40 bg-gray-300 rounded-xl"></View>
          </View>
          <View className="px-6 pt-3 pb-4 mt-3 bg-slate-100 rounded-xl">
            <Text>Add Tip</Text>
            <Badge title="a"></Badge>
          </View>
          <View className="px-6 pt-3 pb-4 mt-3 bg-slate-100 rounded-xl">
            <Text>Total</Text>
            <Text>Payment</Text>
          </View>
        </View>
      </Layout>
    </>
  );
};

export default Products;
