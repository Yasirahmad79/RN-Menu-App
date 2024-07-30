import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchText,setSearchText] = useState('');

  const handleChangeText = (text) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    onSearch(searchText); 
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} style={styles.searchIcon} onPress={handleSearch} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSearch} 
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
