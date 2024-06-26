import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/Favorite";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={changeFavoriteStatusHandler}>
          <Ionicons
            name={mealIsFavorite ? "star" : "star-outline"}
            size={24}
            color={"yellow"}
          />
        </Pressable>
      ),
    });
  }, [navigation, mealIsFavorite]);

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
    textTransform: "uppercase",
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
    fontWeight: "bold",
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#F27900",
  },
});

export default MealDetailScreen;
