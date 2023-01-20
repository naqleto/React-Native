import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Slider from '@react-native-community/slider';

export default function App() {

  const [valor, setValor] = useState(20);

  return (
    <View style={styles.container}>
      <Slider
      minimumValue={0} /*Valor minimo do controle deslizante*/
      maximumValue={100} /*valor maximo do conttrole deslizante*/
      value={valor} /* Value recebe quem esta COMANDANDO no caso seria o {valor} */
      onValueChange={(valorSelecionado) =>setValor(valorSelecionado)}
      /*Retorno de chamada que é chamado quando o usuário pressiona a caixa de seleção. */
      minimumTrackTintColor= 'blue'
      maximumTrackTintColor= 'red'
      />

      <Text style={{ textAlign: 'center',fontSize: 25}}> Você tem: {valor.toFixed(0)} anos </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 135
    
  },
});
