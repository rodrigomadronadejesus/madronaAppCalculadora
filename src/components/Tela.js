import React, { Component } from "react";
import { View, Text } from 'react-native';

import Styles from '../styles/Tela';

export default class Tela extends Component {

    state = {};
    data = {};

    constructor (props){
        super(props);
        this.data.valor = props.valor;
    }

    render (){
        return (
            <View style={Styles.Tela}>
                <Text style={Styles.TelaValor} numberOfLines={1}>{this.data.valor}</Text>
            </View>
        );
    }
}