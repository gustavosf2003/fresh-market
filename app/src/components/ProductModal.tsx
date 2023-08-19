import React, { useContext } from "react";

import { businessRules } from "@app/config/constants";
import { ProductContext } from "@app/context/product";
import { Product } from "@app/interfaces/products";
import { addToCart, removeFromCart } from "@app/utils/manageCart";
import { View, Text } from "react-native";

import Counter from "./Counter";
import CustomModal from "./CustomModal";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  counterValue: number;
  setCounterValue: React.Dispatch<React.SetStateAction<any>>;
}

const ProductModal = ({
  product,
  isOpen,
  setIsOpen,
  counterValue,
  setCounterValue,
}: ProductModalProps) => {
  const { savedProducts, setSavedProducts } = useContext(ProductContext);
  const productContent = product.content;
  return (
    <CustomModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={productContent.name}>
      <>
        <View className="bg-white">
          <View className="flex flex-row items-center -mt-1">
            <View className="px-2 ml-4 bg-red-500 rounded-full">
              <Text className="text-lg font-bold text-white">
                {productContent.price}
                {businessRules.currency}
              </Text>
            </View>
            <Text className="ml-4">{productContent.unit}</Text>
          </View>
          <Text className="mx-4 my-3 text-justify">
            {productContent.description}
          </Text>
        </View>
        <View className="px-4 pb-16 mt-2 bg-white">
          <View className="flex flex-row items-center justify-between mt-4">
            <Text className="text-lg font-medium">Add to basket</Text>
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
                }
              }}
            />
          </View>
        </View>
      </>
    </CustomModal>
  );
};

export default ProductModal;
