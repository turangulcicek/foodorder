import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ProducDetailsScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ProducDetailsScreen :id {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
