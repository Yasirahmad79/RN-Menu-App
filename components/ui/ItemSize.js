import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

const SizeSelector = ({selectedSize, setSelectedSize}) => {

  

  const sizeArr = ['Small', 'Medium', 'Large'];
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Size</Text>
      <View style={styles.optionsContainer}>
        {sizeArr.map((size) => (
          <TouchableOpacity
            key={size}
            style={styles.option}
            onPress={() => handleSizeChange(size)}
          >
            <View
              style={[
                styles.radioButton,
                selectedSize === size && styles.selectedRadioButton,
              ]}
            />
            <Text style={styles.optionText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'purple',
    marginRight: 8,
  },
  selectedRadioButton: {
    backgroundColor: 'purple',
  },
  optionText: {
    fontSize: 16,
    color: Colors.mainBrown,
    fontWeight: "700"
  },
});

export default SizeSelector;
