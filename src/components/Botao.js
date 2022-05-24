import React, { Component } from "react";
import {
    Text,
    TouchableHighlight
} from 'react-native';

import Styles from '../styles/Botao';

export default class Botao extends Component {
    StylesBotao = new Array();

    constructor(props){
        super(props);

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
            <TouchableHighlight onPress={this.props.onClick}>
                <Text valor={this.props.valor} style={this.StylesBotao}>{this.props.nome}</Text>
            </TouchableHighlight>
        );
    }
}