
import React, { Component } from "react";
import {
    SafeAreaView
} from 'react-native';

import Styles from '../styles/Render';
import Tela from "./Tela";
import Teclado from "./Teclado";


export default class Render extends Component {
    
    constructor (props) {
        super(props);
    }

    render (){
        return (
            <SafeAreaView style={Styles.Container}>
                <Tela 
                    valor={this.props.TValor}
                />
                <Teclado
                    onClickDigito={this.props.onClickDigito}
                    onClickLimpar={this.props.onClickLimpar}
                    onClickOperacao={this.props.onClickOperacao}
                />
            </SafeAreaView>
        );
    }
}
