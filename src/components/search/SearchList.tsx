import { GET_PRODUCTS } from "@app/queries/products";
import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { Product } from "../../../interfaces/products";
interface SearchListProps {
  searchText: string;
}

const SearchList = ({ searchText }: SearchListProps) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { searchTerm: searchText, perPage: 4 },
  });
  let searchedItems;
  if (data) {
    searchedItems = data.ProductItems.items;
  }
  return (
    <View className="absolute w-full -bottom-[228px] min-h-[228px]">
      <View className="bg-slate-200 py-2.5 px-2">
        {loading && <ActivityIndicator />}
        {error && <Text>There was an error</Text>}
        {searchedItems?.length == 0 && <Text>No result</Text>}
        {data &&
          searchedItems.map((item: Product) => (
            <View key={item.id} className="flex flex-row items-start mt-3">
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
            </View>
          ))}
      </View>
    </View>
  );
};

export default SearchList;
