import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigation from "./BottomNavigation";
import RecipeDetailsScreen from "../Recipe/Recipe/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();
const RecipeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="bottomNav"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="bottomNav" component={BottomNavigation} />
      <Stack.Screen
        name="recipeDetailsScreen"
        component={RecipeDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RecipeNavigation;
