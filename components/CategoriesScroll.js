import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import CategoryGridTile from './CategoryGridTile';

const CategoriesScroll = () => {
  const navigation = useNavigation();

  const pressHandler = (categoryId) => {
    navigation.navigate("Meal OverView", {
      categoryId: categoryId
    });
  };

  const renderCategoryItems = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => pressHandler(item.id)}
      />
    );
  };
  
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItems}
          contentContainerStyle={styles.categoryList}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 0.15,
      paddingTop: 20
    },
    categoryList: {
      paddingHorizontal: 8,
    },
  });
  
  export default CategoriesScroll;