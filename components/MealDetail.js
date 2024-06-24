import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetail = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  detailItem: {
    fontSize: 16,
    marginHorizontal: 16,
    fontWeight: '500',
    color: 'white'
  },
});

export default MealDetail;
