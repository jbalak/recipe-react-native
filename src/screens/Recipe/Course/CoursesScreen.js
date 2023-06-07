import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import useGetCourses from "./useGetCourses";

const CoursesScreen = () => {
  let courses = useGetCourses();
  return (
    <ScrollView
      style={styles.ScrollView}
      horizontal={true}
      bounces={false}
      showsHorizontalScrollIndicator={false}
    >
      {courses.map((course) => (
        <View key={course.image} style={styles.card}>
          <Image source={{ uri: course.image }} style={styles.cardImage} />
          <Text style={styles.cardText}>{course.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  ScrollView: {
    paddingHorizontal: 15,
    paddingStart: 0,
  },
  card: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 5,
    color: "white",
    alignContent: "center",
    alignItems: "center",
  },

  cardImage: {
    borderRadius: 16,
    width: 130,
    height: 130,
  },
  cardText: {
    maxWidth: 130,
    fontWeight: "400",
    fontSize: 15,
  },
});
