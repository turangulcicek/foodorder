import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import products from "@/assets/data/products";
import { Image, FlatList, View, Text, ScrollView } from "react-native";
export default function TabOneScreen() {
  return (
    <ScrollView>
      {products.map((pizza) => (
        <View style={styles.innerContainer}>
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
