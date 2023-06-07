import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import CoursesScreen from "../Recipe/Course/CoursesScreen";
import RecipeScreen from "../Recipe/Recipe/RecipeScreen";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>All Recipes</Text>
          <TextInput
            placeholder="Search your recipes"
            style={styles.searchInput}
          />
        </View>

        <ScrollView>
          <View>
            <CoursesScreen />

            <RecipeScreen />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "8%",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  searchInput: {
    // paddings: 8,
    paddingHorizontal: 8,
    marginTop: "4%",
    height: 50,
    borderWidth: 0.2,
    borderRadius: 6,
  },
});
