import React, { useState } from 'react';
import { StyleSheet, Text, View,Switch } from 'react-native';

export default function App() {
// O SWITCH como ele Ativa e Desativa ele tem os valores Boleanos
const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
   
    <Switch
    // Duas PROPIEDADES são obrigatórias Value, onValueChange (VALUE: qual o valor que esta controlando )
    value={status}
    // Todda vez que você tracar o valor ele ira trocar o valor que esta dentro do STATUS.
    onValueChange={ (valorSecionado) => setStatus(valorSecionado) }
    // TrackColor é o canal onde corre a bolinha
    trackColor={{ false: '#121212', true: '#ooffoo' }}
    // thumbColor é abolinha
    thumbColor={ status ? '#121212' : '#f4f4f4'}
    />

      <Text style={{textAlign:'center', fontSize: 25}} >
        Status: { status ? 'ATIVO' : 'INATIVO' }
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 103,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
