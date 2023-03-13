import React from "react";
import { Skeleton } from "@rneui/themed";
import { ScrollView, View } from "react-native";

const ProductCardLoader: React.FC = () => {
  return (
    <View className="flex flex-row items-center justify-between mx-3 my-2">
      <View className="flex flex-row items-start gap-2">
        <Skeleton width={128} height={96} animation="wave" />
        <View className="flex">
          <View className="flex gap-1 mb-9">
            <Skeleton width={128} height={18} animation="wave" />
            <Skeleton width={100} height={18} animation="wave" />
          </View>
          <Skeleton width={80} height={18} animation="wave" />
        </View>
      </View>
      <Skeleton
        width={80}
        style={{ borderRadius: 40 }}
        height={40}
        animation="wave"
      />
    </View>
  );
};

const ProductsLoader: React.FC = () => {
  const skeletons = Array(6).fill(null);
  return (
    <>
      <View className="">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {skeletons.map((_, index) => (
            <Skeleton
              key={index}
              animation="wave"
              height={36}
              width={80}
              style={{ borderRadius: 40, marginHorizontal: 4 }}
            />
          ))}
        </ScrollView>
        <View className="my-3 border-b border-gray-300" />
        <ScrollView>
          {skeletons.map((_, index) => (
            <ProductCardLoader key={index} />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default ProductsLoader;
