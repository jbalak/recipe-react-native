import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import useGetRecipes from "./useGetRecipes";
import RecipeCard from "./RecipeCard";
const RecipeScreen = () => {
  let recipes = useGetRecipes();
  return (
    <View>
      <View style={styles.listContainer}>
        {recipes.map((recipe) => (
          <View key={recipe.Srno}>
            <RecipeCard
              title={recipe.RecipeName}
              image={recipe.image}
              recipeId={recipe.Srno}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
