import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, AppRegistry } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PizzaList from './PizzaList';
import SearchBar from './SearchBar';



export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name="menu" size={40} color="white" style={{ padding: 15, marginTop: 40 }} />
        <Image source={require('./assets/pizzasolo.png')} style={{ width: 65, height: 53, marginTop: 40 }} />
        <Feather name="shopping-cart" size={35} color="white" style={{ padding: 15, marginTop: 40 }} />
      </View>
      <SearchBar term={searchTerm} onTermChange={setSearchTerm} />
      <PizzaList />
      <View style={styles.bottom}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC'
  },
  header: {
    backgroundColor: '#DE3A2F',
    flexDirection: 'row',
    alignItems: 'center',
    height: 110,
    justifyContent: 'space-between',
  },
  bottom: {
    backgroundColor: '#DE3A2F',
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  }
});
