import { StyleSheet, Text, Image, Pressable } from "react-native";
import React from "react";
import { Product } from "../types";
import Colors from "constants/Colors";
import { Link } from "expo-router";

export const defaultPizzamage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";
type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.innerContainer} key={product.id}>
        <Image
          source={{ uri: product.image ? product.image : defaultPizzamage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    maxWidth: "50%",
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
    width: "100%",
    aspectRatio: 1,
  },
});
