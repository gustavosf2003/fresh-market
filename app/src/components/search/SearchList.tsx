import React, { useContext, useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import { ProductContext } from "@app/context/product";
import { GET_PRODUCTS } from "@app/queries/products";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { Product } from "../../../interfaces/products";
import { getQuantityByProductId } from "../ProductCard";
import ProductModal from "../ProductModal";
interface SearchListProps {
  searchText: string;
}

const SearchList = ({ searchText }: SearchListProps) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { searchTerm: searchText, perPage: 4 },
  });
  const { savedProducts } = useContext(ProductContext);
  const [counterValue, setCounterValue] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  async function openModal(item: Product) {
    setCounterValue(getQuantityByProductId(savedProducts, item.id)!);
    setSelectedProduct(item);
    setIsModalVisible(true);
  }

  let searchedItems;
  if (data) {
    searchedItems = data.ProductItems.items;
  }
  return (
    <>
      {selectedProduct && isModalVisible && (
        <ProductModal
          product={selectedProduct}
          isOpen={true}
          setIsOpen={setIsModalVisible}
          counterValue={counterValue}
          setCounterValue={setCounterValue}
        />
      )}
      <View className="absolute w-full -bottom-[228px] min-h-[228px]">
        <View className="bg-slate-200 py-2.5 px-2">
          {loading && <ActivityIndicator />}
          {error && <Text>There was an error</Text>}
          {searchedItems?.length === 0 && <Text>No result</Text>}
          {data &&
            searchedItems.map((item: Product) => (
              <TouchableOpacity
                key={item.id}
                className="flex flex-row items-start mt-3"
                onPress={() => openModal(item)}>
                <Image
                  className="w-10 h-10"
                  source={{ uri: item.content.image.filename }}
                />
                <View className="ml-2">
                  <Text className="font-medium capitalize">
                    {item.content.name}
                  </Text>
                  <Text className="capitalize">{item.content.unit}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </>
  );
};

export default SearchList;
