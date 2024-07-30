import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

const Checkout = ({
  id,
  title,
  imageUrl,
  duration,
  quantity,
  selectedSize,
}) => {
  const navigation = useNavigation();

  const totalPrice = duration * quantity;

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemDetails}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>Total Price: {totalPrice} $</Text>
          <Text style={styles.price}>{quantity} Item{quantity > 1 ? 's' : ''} </Text>
          <Text style={styles.price}>{selectedSize} Size </Text>
          <TouchableOpacity
            style={styles.placeOrderContainer}
            onPress={() =>
              navigation.navigate("payment", {
                title,
                imageUrl,
                quantity,
                selectedSize,
                totalPrice
              })
            }
          >
            <Text style={styles.placeOrderBtn}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    marginBottom: 10,
  },
  itemDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },
  titleContainer: {
    marginRight: 80,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    flexWrap: "wrap",
    color: "white",
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    fontStyle: "italic",
    marginVertical: 5,
    color: "black",
    fontWeight: "900",
  },
  placeOrderContainer: {
    backgroundColor: Colors.primary800,
    alignItems: "center",
    borderRadius: 20,
    padding: 6,
    width: 150,
  },
  placeOrderBtn: { fontWeight: "bold", fontSize: 18, color: "white" },
  deleteButton: {
    padding: 10,
    marginLeft: 10,
  },
});

export default Checkout;
