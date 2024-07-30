import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";

const MealDetail = ({ duration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailPrice}>
        <Text style={styles.detailItem}>
          PRICE <Text style={styles.innerText}> :</Text>
        </Text>
        <Text style={styles.detailItem}><Text style={styles.innerText}>{duration} $</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  detailItem: {
    fontSize: 16,
    marginHorizontal: 16,
    fontWeight: "500",
    color: "white",
  },
  detailPrice: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 20,
    padding: 8
  },
  innerText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default MealDetail;
