import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import IngredientScreen from "./IngredientScreen";
import InstructionsScreen from "./InstructionsScreen";

const RecipeDetailsScreen = () => {
  const [ingColor, setIngColor] = useState("lightgreen");
  const [instColor, setInstColor] = useState("white");
  const [screenSelect, setScreenSelect] = useState("ing");

  const {
    params: { recipes },
  } = useRoute();

  let recipe = recipes[0];

  const handleTabPress = (input) => {
    if (input == "ing") {
      setScreenSelect("ing");
      setIngColor("lightgreen");
      setInstColor("white");
    } else {
      setScreenSelect("inst");
      setIngColor("white");
      setInstColor("lightgreen");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <View>
          <Image
            source={{ uri: recipe.image }}
            style={{ width: "100%", height: 400 }}
          />
        </View>
        <View style={styles.mainContainer}>
          <Text>{recipe.RecipeName}</Text>
          <View style={styles.horizontalCards}>
            <Text style={styles.tags}>Prep Time {recipe.PrepTimeInMins}m</Text>
            <Text style={styles.tags}>Cook Time {recipe.CookTimeInMins}m</Text>
            <Text style={styles.tags}>Servings {recipe.Servings}</Text>
          </View>

          <View style={styles.cardContainer2}>
            <TouchableOpacity onPress={() => handleTabPress("ing")}>
              <Text
                style={[
                  styles.tags2,
                  {
                    backgroundColor:
                      screenSelect == "ing" ? "lightgreen" : "white",
                  },
                ]}
              >
                Ingredients
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabPress("inst")}>
              <Text
                style={[
                  styles.tags2,
                  {
                    backgroundColor:
                      screenSelect == "inst" ? "lightgreen" : "white",
                  },
                ]}
              >
                Instructions
              </Text>
            </TouchableOpacity>
          </View>

          {screenSelect == "ing" ? (
            <View style={styles.listContainer}>
              <View>
                <IngredientScreen list={recipe.Ingredients} />
              </View>
            </View>
          ) : (
            <View style={styles.listContainer}>
              <View>
                <InstructionsScreen list={recipe.Instructions} />
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 30,
    marginTop: 16,
  },
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
  cardContainer2: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tags2: {
    margin: 10,
    width: 90,
    height: 30,
    borderRadius: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "400",
    fontSize: 15,
    elevation: 2,
  },
  listContainer: {
    marginTop: 10,
  },
});
