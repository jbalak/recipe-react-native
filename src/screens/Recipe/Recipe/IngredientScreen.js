import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const IngredientScreen = ({ list }) => {
  list = list.split(",");
  return (
    <View>
      {list.map((l) => (
        <Text key={l}>{`\u2022 ${l}`}</Text>
      ))}
    </View>
  );
};

export default IngredientScreen;

const styles = StyleSheet.create({});
