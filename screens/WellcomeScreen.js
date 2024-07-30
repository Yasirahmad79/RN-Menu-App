import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import SearchBar from "../components/ui/SearchBar";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data"; // Assuming MEALS is your initial data
import { Colors } from "../constants/styles";
import CategoriesScroll from "../components/CategoriesScroll";

const WelcomeScreen = () => {
  const [meals, setMeals] = useState(MEALS); // Initial state with all meals
  const [userName, setUserName] = useState(""); // State to store user's name

  // Effect to fetch user's name from Firebase
  useEffect(() => {
    axios
      .get(
        `https://expense-tracker-app-f4834-default-rtdb.firebaseio.com/name.json`
      )
      .then((response) => {
        setUserName(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user's name:", error);
      });
  }, []);

  // Function to filter meals based on searchText
  const handleSearch = (searchText) => {
    const filteredMeals = MEALS.filter((meal) =>
      meal.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setMeals(filteredMeals);
  };

  // Render function for each meal item
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome to Our Store!</Text>
      <Text style={[styles.text, styles.textBoldItalic]}>
        Welcome, {userName || "Guest"}
      </Text>
      <SearchBar
        placeholder={"Search your favourite food..."}
        onSearch={handleSearch}
      />
      <CategoriesScroll />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    paddingTop: 12,
    backgroundColor: Colors.greenish,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
  },
  text: {
    color: "white",
    marginBottom: 14,
    textAlign: "center",
  },
  textBoldItalic: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  flatlistContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.primary800,
    marginTop: 20,
    borderRadius: 14,
  },
});
