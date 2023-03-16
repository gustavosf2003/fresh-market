import React, { useContext, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import Counter from "./Counter";
import CustomModal from "./CustomModal";
import { addToCart, removeFromCart } from "@app/utils/manageCart";
import { ProductContext } from "@app/context/product";
import { Product } from "@app/interfaces/products";
import { businessRules } from "@app/config/constants";

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
    <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} title={`#${product.id}`}>
      <>
        <ScrollView>
          <View className="mx-2 mt-6 ">
            <View className="flex flex-row">
              <View className="w-36 h-28">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  source={{ uri: productContent.image.filename }}
                />
              </View>
              <View className="flex flex-col justify-between ml-3">
                <View>
                  <Text className="text-lg font-bold">
                    {productContent.name}
                  </Text>
                  <Text>{productContent?.unit}</Text>
                  <Text>Origin: {productContent.origin}</Text>
                </View>
                <Text className="font-bold">
                  {productContent.price}
                  {businessRules.currency}
                </Text>
              </View>
            </View>
            <View className="mt-3">
              <Text className="text-lg font-medium">Description</Text>
              <Text className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quis totam deserunt accusamus vel voluptate optio
                quibusdam dolores unde omnis. Voluptate illo magni cumque nobis?
                Aliquam laboriosam officia dolorum suscipit!
              </Text>
            </View>
          </View>
        </ScrollView>
        <View className="absolute w-full border-t border-gray-400 bottom-6">
          <View className="flex flex-row items-center justify-between px-4 mt-4">
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
