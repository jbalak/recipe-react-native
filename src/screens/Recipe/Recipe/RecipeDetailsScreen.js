import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const RecipeDetailsScreen = () => {
  const {
    params: { recipes },
  } = useRoute();

  let recipe = recipes[0];

  useEffect(() => {
    console.log({ recipe: recipe.image });
  }, [recipes]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <View>
          <Image
            source={{ uri: recipe.image }}
            style={{ width: "100%", height: 400 }}
          />
        </View>
        <View>
          <Text>{recipe.RecipeName}</Text>
          <View style={styles.horizontalCards}>
            <Text style={styles.tags}>Prep Time {recipe.PrepTimeInMins}m</Text>
            <Text style={styles.tags}>Cook Time {recipe.CookTimeInMins}m</Text>
            <Text style={styles.tags}>Servings {recipe.Servings}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  horizontalCards: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingBottom: 10,
  },
  tags: {
    backgroundColor: "white",
    width: 120,
    height: 40,
    borderRadius: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "400",
    fontSize: 15,
    elevation: 2,
    zIndex: 2,
  },
});
