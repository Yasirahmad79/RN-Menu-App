
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.root}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.gridItem,
          { backgroundColor: pressed ? "#ddd" : color }, 
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.gridTitleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  root: {
    height: 50,
    borderRadius: 12,
    overflow: "hidden", 
    marginRight: 10,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  gridItem: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    padding: 10
  },
  gridTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
  },
});
