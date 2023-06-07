import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const InstructionsScreen = ({ list }) => {
  list = list.split(",");
  return (
    <View>
      {list.map((l) => (
        <Text key={l}>{`\u2022 ${l}`}</Text>
      ))}
    </View>
  );
};

export default InstructionsScreen;

const styles = StyleSheet.create({});
