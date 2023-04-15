import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, AppRegistry} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    
    <SafeAreaView>
      <View style={styles.header}>
        <Feather name="menu" size={30} color="black" style={{padding: 15, marginTop: 25}}/>
        <Image
          source={require('./assets/pizzasolo.png')}
          style={{width: 60, height: 48, marginTop: 30}}
        /> 
        <Feather name="shopping-cart" size={30} color="black" style={{padding: 15, marginTop:25}}/>
        
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DE3A2F', 
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    justifyContent: 'space-between'
    
  },

});
