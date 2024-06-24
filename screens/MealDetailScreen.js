import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const headerButtonPressHandler =()=>{
    console.warn(mealId);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={headerButtonPressHandler}>
            <Ionicons name="star" size={24} color={"yellow"} />
          </Pressable>
        );
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.moreDetail}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.text}>
            {ingredient}
          </Text>
        ))}
        <Text style={styles.sectionTitle}>Steps</Text>
        {selectedMeal.steps.map((step, index) => (
          <Text key={index} style={styles.text}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: "white",
    fontWeight: "bold",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    borderColor: "#F27900",
    paddingBottom: 6,
    marginVertical: 10,
    textAlign: "center",
  },
  moreDetail: {
    marginHorizontal: 26,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#F27900",
    paddingBottom: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginVertical: 5,
    marginHorizontal: 20,
    fontWeight: 'bold',
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#F27900'
  },
});

export default MealDetailScreen;
