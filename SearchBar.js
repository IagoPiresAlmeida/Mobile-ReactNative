import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.background}>
      <Feather name="search"  size={10} style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    marginTop: 15,
  },
  
  inputStyle: {
    flex: 1,
    fontSize: 18,
    color: "#A9A9A9",
  },
  iconStyle: {
    fontSize: 22,
    alignSelf: 'center',
    marginHorizontal: 10,
    color: "#A9A9A9",
    
  },
  
});

export default SearchBar;
