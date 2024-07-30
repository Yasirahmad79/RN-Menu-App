import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/redux/Cart";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import ItemQuantity from "./ui/ItemQuantity";
import SizeSelector from "./ui/ItemSize";

const CartItem = ({ id, title, imageUrl, duration, onDelete }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const handleDeleteItem = () => {
    dispatch(removeFromCart(id));
    onDelete();
  };

  return (
    <View style={styles.cartItem}>
      <View>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
              onPress={handleDeleteItem}
              style={styles.deleteButton}
            >
              <Ionicons name="trash" color={"red"} size={34} />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{duration} $</Text>
          <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <TouchableOpacity
            style={styles.placeOrderContainer}
            onPress={() =>
              navigation.navigate("checkout", {
                quantity: quantity,
                selectedSize: selectedSize,
              })
            }
          >
            <Text style={styles.placeOrderBtn}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    color: "white",
  },
  placeOrderContainer: {
    backgroundColor: Colors.primary800,
    alignItems: "center",
    borderRadius: 20,
    padding: 6,
    width: 150,
  },
  placeOrderBtn: { fontWeight: "bold", fontSize: 18, color: "white" },
});

export default CartItem;
