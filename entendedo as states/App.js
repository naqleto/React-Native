import React, { useState } from "react";
import { View, Text, Button } from "react-native";


function App(){
  const [nome,setNome] = useState('Wilson');
  const [idade,setIdade] = useState(55);

function entrar(nome, idade){
  setNome(nome)
  setIdade(idade);
}
  return(
    <View style={{ marginTop: 40}}>
      <Text>Olá mundo!!!!</Text>
      <Button title= "mudar nome" onPress={ () => entrar('Wilson Naqleto',47)} />
      <Text style={{fontSize:30, color: 'blue'}}>{nome}</Text>
      <Text style={{fontSize:20, color: 'orange'}}>{idade}</Text>
    </View>
  );
}
export default App;

