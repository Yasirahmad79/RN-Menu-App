import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/styles";

function FlatButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.btnContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  btnContainer: {
    backgroundColor: Colors.greenish,
    marginHorizontal: "auto",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16
  },
});
