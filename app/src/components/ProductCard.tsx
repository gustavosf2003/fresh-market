import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { addToCart, removeFromCart } from "@app/utils/manageCart";
import { Product } from "@app/interfaces/products";
import { ProductContext } from "@app/context/product";
import { businessRules } from "@app/config/constants";
import Counter from "./Counter";
import { parseCurrency } from "../../utils/prices";
import CustomModal from "./CustomModal";
import ProductModal from "./ProductModal";
import { SnackBarContext } from "../../context/snackbar";

export interface ProductCardProps {
  savedProducts: Product[];
  setSavedProducts: React.Dispatch<React.SetStateAction<any>>;
  product: Product;
}
export interface ProductProp {
  product: Product;
  quantity?: number;
  showDynamicPrice?: boolean;
}

export function getQuantityByProductId(
  items: Product[],
  id: number
): number | undefined {
  const item = items.find((item) => item.id === id);
  return item?.quantity ?? 0;
}

const ProductCard = ({ product, quantity, showDynamicPrice }: ProductProp) => {
  const { savedProducts, setSavedProducts } = useContext(ProductContext);
  const { setTitle } = useContext(SnackBarContext);
  const [counterValue, setCounterValue] = useState<number>(0);
  var productContent = product.content;
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setCounterValue(getQuantityByProductId(savedProducts, product.id)!);
  }, [savedProducts]);

  return (
    <>
      <ProductModal
        product={product}
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
        counterValue={counterValue}
        setCounterValue={setCounterValue}
      />
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        className="flex flex-row justify-between mt-4"
      >
        <View className="flex flex-row ">
          <View className="w-32 h-24">
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{ uri: productContent.image.filename }}
            />
          </View>
          <View className="flex justify-between my-1 ml-2 ">
            <View>
              <Text className="flex font-medium">{productContent.name}</Text>
              <Text className="text-gray-700">{productContent.unit}</Text>
              <Text className="text-gray-700">
                Origin: {productContent.origin}
              </Text>
            </View>
            <Text className="font-bold">
              {parseCurrency(
                showDynamicPrice
                  ? productContent.price * counterValue
                  : productContent.price
              )}
            </Text>
          </View>
        </View>
        <Counter
          counter={counterValue}
          removeItem={() => {
            if (counterValue > 0) {
              setCounterValue(counterValue - 1);
              removeFromCart({ product, savedProducts, setSavedProducts });
            }
          }}
          addItem={() => {
            if (counterValue < 9) {
              setCounterValue(counterValue + 1);
              addToCart({ product, savedProducts, setSavedProducts });
            } else {
              setTitle("You cannot add more than 9 units");
            }
          }}
        />
      </TouchableOpacity>
    </>
  );
};

export default ProductCard;
