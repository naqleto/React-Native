import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Pessoa from './src/Pessoa';

export default function App() {

  const [feed, setFeed] = useState ([
    {id: '1', nome:'Wilson', idade:'55', email: 'wilson@wilson.com'},
    {id: '2', nome:'Pedro', idade:'35', email: 'pedro@pedro.com'},
    {id: '3', nome:'João', idade:'20', email: 'joao@joao.com'},
    {id: '4', nome:'Maria', idade:'60', email: 'maria@maria.com'},
    {id: '5', nome: 'Antonio', idade: '47', email: 'antionio@antonio.com'},
  ])
  return (
    <View style={styles.container}>
      
      <FlatList
      data={feed}
      renderItem={({item}) => <Pessoa data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
})

