import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import products from "@/assets/data/products";
import Colors from "@/constants/Colors";

export default function ProductListItem() {
  return (
    <ScrollView>
      {products.map((pizza) => (
        <View style={styles.innerContainer} key={pizza.id}>
          <Image source={{ uri: pizza.image }} style={styles.image} />
          <Text style={styles.text}>{pizza.name}</Text>
          <Text style={styles.price}>{pizza.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
});
