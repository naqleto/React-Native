import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
/*As informações vem via Pros(propriedades)*/
export default function List(props) {
    /*Recebe likeada, se du like ou não*/
    function carregarIcone(likeada) {
        /*Faser uma renderisação condicional
        se "for TRUE"*/
        return likeada ? require('../img/likeada.png') :
            /*Se "não for TRUE" vai mostrar a foto que não foi Likeada*/
            require('../img/like.png')
    }
    /*Função mostraLikers Recebe (likers) */
    function mostraLikes(likers) {
        /*Se esse Likers for igual a zero*/
        if (likers === 0) {
            return; /*Não vai mostrar nada*/
        }
        /*Se não ele tem uma ou varias curtidas*/
        return (/*Pararetornar um JSX precisa estar denro dos Parentes*/
            /*Se liKers for (>)maior que 1 mostrar "curtidas"
            se não for mostrar "curtida"*/
            <Text style={styles.likes}> {likers} {likers > 1 ? 'curtidas' : 'curtida'} </Text>
        );
    }

    return (
        <View>
            <View style={styles.viewPerfil}>
                <Image
                    /*Imagem do Perfil*/
                    source={{ uri: props.data.imgperfil }}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>
                    {props.data.nome}
                </Text>
            </View>

            <Image
                resizeMode="cover"
                source={{uri:props.data.imgPublicacao}}
                style={styles.fotoPublicacao}
            />

            <View style={styles.areaBtn} >
                <TouchableOpacity>
                    <Image
                        /*Chamar uma função se esta Likeada ou não*/
                        source={carregarIcone(props.data.likeada)}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend}>
                    <Image
                        source={require('../img/comment.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend}>
                    <Image
                        source={require('../img/send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>
                {props.data.nome}
            </Text>

            <Text style={styles.descRodape}>
                {props.data.descricao}
            </Text>
        </View>
    );
}
/*
1ª coisa a se pensar é que a publicação tem um Header
2ª coisa tem um Havatar e o nome na mesma linha
3ª em baixo tem a foto publicada
4ª em baixo tem a quantidade de Liks*/
const styles = StyleSheet.create({
    viewPerfil: {
        flexDirection: 'row', /*Um ao lado do outro*/
        flex: 1, /*Pegar o resto da tela*/
        alignItems: 'center', /*Alinhar ao centro na Vertical*/
        pading: 8, /*Espaçamento interno*/
    },
    fotoPerfil: {
        marginTop: 20,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 20,
        color: '#000',
    },
    fotoPublicacao: {
        alignItems: 'center',
        height: 400,/*Vai se adaptar ao espaço total porque não esta em uma <View>*/
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 25,
        height: 25
    },
    btnsend: {
        paddingLeft: 10
    },
    likes: {
        fontWeight: 'bold', /*Negrito*/
        marginLeft: 8,/*Maargim Externa*/
    },
    nomeRodape: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    descRodape: {
        paddingLeft: 10,
        paddingBottom: 10,
        fontSize: 14
    },
});