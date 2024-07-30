import React, { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { Colors } from "../constants/styles";

const FavouriteScreen = ({ navigation }) => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorites",
    });
  }, [navigation]);

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.nullMealContainer}>
        <Text style={styles.text}>No favorite meals yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.mealContainer}>
      <FlatList
        data={favouriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  nullMealContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: Colors.greenish,
  },
  mealContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    paddingVertical: 16,
    backgroundColor: Colors.greenish,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
