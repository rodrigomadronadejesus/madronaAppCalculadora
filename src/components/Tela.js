import React, { Component } from "react";
import { View, Text } from 'react-native';

import Styles from '../styles/Tela';

export default class Tela extends Component {
    constructor (props){
        super(props);
    }

    render (){
        return (
            <View style={Styles.Tela}>
                <Text style={Styles.TelaValor} numberOfLines={1}>{this.props.valor}</Text>
            </View>
        );
    }
}