import React from "react";
import { View, Text, Image, Pressable, StyleSheet, Platform, Alert } from "react-native";
import MealDetail from "../components/MealDetail";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/redux/Cart";
import Button from "./ui/Button";
import { Colors } from "../constants/styles";

const MealItem = ({ id, title, imageUrl, duration }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const mealIsFavorite = cartItems.some((item) => item.id === id);

  const selectedMealpressHandler = () => {
    navigation.navigate("Meal Detail", {
      mealId: id,
    });
  };

  const changeCartItemHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, title, imageUrl, duration }));
        Alert.alert(`${title} added to cart!`)
    }
  };

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => [
          styles.gridItem,
          { backgroundColor: pressed ? Colors.lightGrey : "#ddd" }, 
        ]} onPress={selectedMealpressHandler}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.mealTitle}>{title}</Text>
        </View>
        <MealDetail duration={duration} />
      </Pressable>
      <View style={{ paddingBottom: 10, marginHorizontal: 16 }}>
        <Button onPress={changeCartItemHandler}>
          Add to Cart
        </Button>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "#ccc",
    borderRadius: 14,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    textAlign: "center",
    color: Colors.primary800,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

