import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";

export default function Header(){/* Criar os componentes */
    return(
        <View style={styles.header} >
            <TouchableOpacity>
                <Image
                source= {require('../img/logo.png')}
                style={styles.logo}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                source= {require('../img/send.png')}
                style={styles.send}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    header:{
        marginTop:35,
        height:55,/* altura */
        backgroundColor: '#fff',
        flexDirection: 'row', /*um ao lado do outro na mesma linha*/
        alignItems:'center',/*alinha verticalmente*/
        justifyContent:'space-between',/*espaçamento entre eles*/
        paddingLeft: 15,/*Padding espaçamento interno */
        paddingRight:15,
        borderBottomWidth: 0.2,/*Borda*/
        shadowColor: 'red',/*Sombra*/
        elevation: 10,
    },
    logo:{

    },
    send:{
        width:23,
        height:23,
    }
})