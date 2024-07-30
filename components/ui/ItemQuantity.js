import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
import { Colors } from "../../constants/styles";

const ItemQuantity = ({ quantity, setQuantity }) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon="remove-outline"
        color={"white"}
        size={20}
        onPress={() =>
          setQuantity((prevQuantity) =>
            prevQuantity <= 1 ? (prevQuantity = 1) : prevQuantity - 1
          )
        }
        style={styles.iconStyles}
      />
      <Text style={styles.price}>{quantity}</Text>
      <IconButton
        icon="add-outline"
        color={"white"}
        size={20}
        onPress={() => setQuantity((prevQuantity) => prevQuantity + 1)}
        style={styles.iconStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    color: "white",
  },
  iconStyles: {
    backgroundColor: Colors.lightGrey,
    padding: 3,
    borderRadius: 5
  }
});

export default ItemQuantity;
