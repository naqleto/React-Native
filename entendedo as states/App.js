import React from "react";
import { View, Text } from "react-native";


function App(){
  
  return(
    <View style={{ flex:1, backgroundColor:'#121212'}}>
      <View style={{ height: 65, backgroundColor:'#121212'}}></View>
      <View style={{ flex:1, backgroundColor:'#ffffff'}}>
        <Text> Eu sou um Texto</Text>
      </View>
      <View style={{ height:65, backgroundColor:'#121212'}}></View>
    </View>
  );
}

export default App;

