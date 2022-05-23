import React, { Component } from "react";
import {
    Text,
    TouchableHighlight
} from 'react-native';

import Styles from '../styles/Botao';

export default class Botao extends Component {

    state = {};
    StylesBotao = new Array();
    data = {};

    constructor(props){
        super(props);
        this.data.nome = props.nome;
        this.data.valor = props.valor;
        this.StylesBotao.push(Styles.Botao);

        if (props.duplo){
            this.StylesBotao.push(Styles.BotaoDuplo);
        }
        if (props.triplo){
            this.StylesBotao.push(Styles.BotaoTriplo);
        }
        if(props.operacao){
            this.StylesBotao.push(Styles.BotaoOperacao);
        }
    }

    render (){
        return (
            <TouchableHighlight>
                <Text valor={this.data.valor} style={this.StylesBotao}>{this.data.nome}</Text>
            </TouchableHighlight>
        );
    }
}