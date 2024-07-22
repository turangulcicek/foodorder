import { View } from "react-native";
import ProductListItem from "@/components/ProductListItem";
import products from "src/assets/data/products";
import { FlatList } from "react-native";
export default function TabOneScreen() {
  return (
    <FlatList
      numColumns={2}
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
