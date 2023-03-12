import { useQuery } from "@apollo/react-hooks";
import { GET_ABOUTUS } from "@app/queries/aboutUs";
import React from "react";
import { View, Text, ScrollView } from "react-native";

const AboutUs: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ABOUTUS);
  const aboutUs = data?.AboutusItem.content;
  return (
    <ScrollView>
      {loading && <Text>Loading</Text>}
      {!loading && (
        <>
          <Text className="text-2xl font-semibold">{aboutUs.title}</Text>
          <Text className="mt-4 ">{aboutUs.body}</Text>
        </>
      )}
    </ScrollView>
  );
};

export default AboutUs;
