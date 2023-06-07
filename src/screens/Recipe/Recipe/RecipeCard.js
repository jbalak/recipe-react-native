import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import useGetRecipes from "./useGetRecipes";

let ids = ["bookmark-outline", "bookmark"];
const RecipeCard = ({ title, image, recipeId }) => {
  const navigate = useNavigation();
  const [showBlack, setShowBlack] = useState(false);
  const handleBookmark = () => {
    setShowBlack((prev) => !prev);
  };

  let recipes = useGetRecipes(recipeId);

  const handleCardPress = () => {
    navigate.navigate("recipeDetailsScreen", { recipes });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <MaterialCommunityIcons
          name="bookmark"
          style={styles.bookmark}
          size={30}
          color={showBlack ? "black" : "white"}
          onPress={handleBookmark}
        />
        <Text style={styles.recipeTimeText}>{"Total Time 30m"}</Text>
      </View>
      <Text style={styles.recipeText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    width: 195,
    borderRadius: 10,
    marginTop: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    borderRadius: 10,
    height: 250,
    margin: 10,
  },
  bookmark: {
    marginTop: 20,
    marginLeft: 130,
    position: "absolute",
  },
  recipeTimeText: {
    backgroundColor: "white",
    marginHorizontal: 35,
    marginTop: -36,
    width: 120,
    height: 40,
    borderRadius: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "400",
    fontSize: 15,
    elevation: 6,
    fontFamily: "Roboto",
  },

  recipeText: {
    width: 170,
    paddingTop: 6,
    paddingHorizontal: 6,
    textAlign: "center",
    fontFamily: "Roboto",
  },
});
