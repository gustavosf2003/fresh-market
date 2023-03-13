import React from "react";
import { View, ScrollView } from "react-native";
import { Skeleton } from "@rneui/themed";

const AboutUsLoader: React.FC = () => {
  const skeletons = Array(30).fill(null);
  return (
    <View>
      <Skeleton
        width={140}
        height={22}
        animation="wave"
        style={{ marginBottom: 20 }}
      />
      <ScrollView>
        {skeletons.map((_, i) => (
          <Skeleton
            height={18}
            key={i}
            animation="wave"
            style={{ marginTop: 8 }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AboutUsLoader;
