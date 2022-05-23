import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    Botao: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    BotaoOperacao: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    BotaoDuplo: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    BotaoTriplo: {
        width: (Dimensions.get('window').width / 4) * 3
    }
});