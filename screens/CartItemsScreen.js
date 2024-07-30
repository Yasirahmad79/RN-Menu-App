
import React from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/redux/Cart";
import CartItem from "../components/CartItem";
import { Colors } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const CartItemScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
    Alert.alert("Item deleted successfully!")
  };

  const renderCartItem = ({ item }) => (
    <CartItem
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      onDelete={() => handleDeleteItem(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Your Cart Items</Text>
      <Ionicons name="cart-outline" color={"white"} size={30} />
      </View>
      
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={styles.cartList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greenish,
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
   
  },
  cartList: {
    flexGrow: 1,
  },
});

export default CartItemScreen;
