import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_ABOUTUS } from "@app/queries/aboutUs";
import { Text, ScrollView } from "react-native";

import AboutUsLoader from "./loader/AboutUsLoader";

const AboutUs: React.FC = () => {
  const { loading, data } = useQuery(GET_ABOUTUS);
  const aboutUs = data?.AboutusItem.content;
  return (
    <ScrollView>
      {loading && <AboutUsLoader />}
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
