import React from 'react';
import{View, Text, StyleSheet } from 'react-native';

// Criando COMPONENTE
function Pessoa(props){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoas}>{props.data.nome}</Text>
        <Text style={styles.textoPessoas}>{props.data.idade}</Text>
        <Text style={styles.textoPessoas}>{props.data.email}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    areaPessoa:{
      backgroundColor: '#103010',
      height: 250,
      marginBottom: 15,
      justifyContent: 'center',
      padding: 20
    },
    textoPessoas:{
      color: '#fff',
      fontSize: 20,
    }
})
  export default Pessoa;