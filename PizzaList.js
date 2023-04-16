import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const DATA = [
  { id: '1',image: require('./assets/pizzasolo.png'), name: 'Pizza Mussarela' , content: 'A clássica pizza de queijo, feita com mussarela derretida.', price: 'R$ 40,00' },
  { id: '2', name: 'Pizza Calabresa' , content: 'Pizza com fatias de linguiça calabresa, queijo e molho de tomate.', price: 'R$ 45,50'},
  { id: '3', name: 'Pizza de Frango c/ Catupiry', content: 'Pizza com frango desfiado e o famoso requeijão cremoso Catupiry.', price: 'R$ 46,80'},
  { id: '4', name: 'Pizza Portuguesa' , content: 'Pizza com presunto, queijo, ovos, cebola, pimentão, azeitonas e molho de tomate.', price: 'R$ 52,90'},
  { id: '5', name: 'Pizza de Pepperoni' , content: 'Pizza com fatias finas de salame pepperoni e queijo.' , price: 'R$ 54,00'},
  { id: '6', name: 'Pizza Margherita' , content: 'Pizza simples com molho de tomate, mussarela e folhas de manjericão.' , price: 'R$ 42,20'},
  { id: '7', name: 'Pizza Quatro Queijos' , content: 'Pizza com uma mistura de queijos, como mussarela, provolone, gorgonzola e parmesão.' , price: 'R$ 55,00'},
  { id: '8', name: 'Pizza de Bacon' , content: 'Pizza com pedaços de bacon crocantsdfsdfsdfe, queijo e molho de tomate.', price: 'R$ 56,60'},
  { id: '9', name: 'Pizza de Atum' , content: 'Pizza com atum fresco, queijo e molho de tomate.', price: 'R$ 57,00'},
  { id: '10', name: "Pizza de Alho" , content: 'Pizza salgada com azeite, alho e queijo.', price: 'R$ 46,00' },
  { id: '11', name: 'Pizza de Chocolate' , content: 'Pizza doce com cobertura de chocolate, como Nutella ou calda de chocolate.' , price: 'R$ 40,00'},
  { id: '12', name: 'Pizza de Banana c/ Canela' , content: 'Pizza doce com fatias de banana, açúcar, canela e queijo.' , price: 'R$ 40,00'},
];


const PizzaList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
        <View style={{flexDirection: "row",}}>
            <Image source={require('./assets/pizzasolo.png')} style={styles.image} />
            <View style={styles.text}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.content}>{item.content}</Text>
            </View> 
        </View>
        
        <TouchableOpacity style={styles.button} ></TouchableOpacity>
        
    </View>
    
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    height: 150,
    borderRadius: 8,
    
    marginHorizontal: 15,

  },
  title: {
    fontSize: 20,
  },
  content: {
    marginright:30,
  },
  text:{
    width: 280
  },
  image:{
    width: 65,
    height: 53,
    marginLeft: -10,
    marginRight: 10
  },
  button:{
    backgroundColor: '#8A2BE2',
  }
});

export default PizzaList;
