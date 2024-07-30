import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import Checkout from "../components/Checkout";
import { useRoute } from "@react-navigation/native";

const CheckoutScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const route = useRoute();
  const quantity = route.params.quantity;
  const selectedSize = route.params.selectedSize;
  

  const renderCartItem = ({ item }) => (
    <Checkout
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      quantity={quantity}
      selectedSize={selectedSize}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Checkout Items</Text>
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

export default CheckoutScreen;
