import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { addToCart, removeFromCart } from "@app/utils/manageCart";
import { Product } from "@app/interfaces/products";
import { ProductContext } from "@app/context/product";
import { businessRules } from "@app/config/constants";
import Counter from "./Counter";

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

function getQuantityByProductName(
  items: Product[],
  name: string
): number | undefined {
  const item = items.find((item) => item.name === name);
  return item?.quantity ?? 0;
}

const ProductCard = ({ product, quantity, showDynamicPrice }: ProductProp) => {
  const { savedProducts, setSavedProducts } = useContext(ProductContext);
  const [counterValue, setCounterValue] = useState<number>(0);

  useEffect(() => {
    setCounterValue(getQuantityByProductName(savedProducts, product.name)!);
  }, [savedProducts]);

  return (
    <View className="flex flex-row justify-between mt-4">
      <View className="flex flex-row ">
        <View className="w-32 h-20">
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={{ uri: product.image.filename }}
          />
        </View>
        <View className="flex justify-between my-1 ml-2 ">
          <View>
            <Text className="flex font-medium">{product.name}</Text>
            <Text>Origin: {product.origin}</Text>
          </View>
          <Text className="font-bold">
            {showDynamicPrice ? product.price * counterValue : product.price}
            {businessRules.currency}
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
          }
        }}
      />
    </View>
  );
};

export default ProductCard;
