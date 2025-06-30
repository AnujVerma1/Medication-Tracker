import { View, Image } from "react-native";
import React from "react";
import { styles } from "../style/Home.style";
import images from "../constant/images";

export default function Home() {
  return (
    <View>
      <Image source={images.medication} style={styles.img} />
    </View>
  );
}
