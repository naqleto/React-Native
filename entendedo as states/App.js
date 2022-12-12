import React from "react";
import { View, Text, StyleSheet } from "react-native";


function App(){
  
  return(
    <View style={styles.area}>
      <Text style={[styles.titulo, styles.textoAlinahado]}> Wilson \0/</Text>
      <Text style={styles.titulo}> Sujeito </Text>
      <Text style={[styles.subTitulo, styles.textoAlinahado]}> Outro Texto </Text>

    </View>
  );
}
const styles=StyleSheet.create({
  area:{
    marginTop: 50
  },
  titulo:{
    fontsize: 20,
    color: '#ff0000',
  },
  subTitulo: {
    color: '#00ff',
    fontSize: 20,
    marginTop: 25,
  },
  textoAlinahado:{
    textAlign: 'center',
  }
});
export default App;

