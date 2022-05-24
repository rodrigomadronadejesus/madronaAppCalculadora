import React, { Component } from "react";
import { View } from "react-native";

import Botao from "../components/Botao";
import Styles from '../styles/Teclado';

export default class Teclado extends Component {
    constructor(props){
        super(props);
    }

    render (){
        return (
            <View style={Styles.Teclado}>
                <Botao 
                    nome='AC' 
                    valor='AC' 
                    triplo 
                    onClick={() => this.props.onClickLimpar()}
                />
                <Botao 
                    nome='/' 
                    valor='/' 
                    operacao  
                    onClick={() => this.props.onClickOperacao ('/')}
                />
                <Botao 
                    nome='7' 
                    valor='7' 
                    onClick={() => this.props.onClickDigito ('7')}
                />
                <Botao 
                    nome='8' 
                    valor='8' 
                    onClick={() => this.props.onClickDigito ('8')}
                />
                <Botao 
                    nome='9' 
                    valor='9' 
                    onClick={() => this.props.onClickDigito ('9')}
                />
                <Botao 
                    nome='*' 
                    valor='*' 
                    operacao  
                    onClick={() => this.props.onClickOperacao('*')}
                />
                <Botao 
                    nome='4' 
                    valor='4' 
                    onClick={() => this.props.onClickDigito ('4')}
                />
                <Botao 
                    nome='5' 
                    valor='5' 
                    onClick={() => this.props.onClickDigito ('5')}
                />
                <Botao 
                    nome='6' 
                    valor='6' 
                    onClick={() => this.props.onClickDigito ('6')}
                />
                <Botao 
                    nome='-' 
                    valor='-' 
                    operacao  
                    onClick={() => this.props.onClickOperacao('-')}
                />
                <Botao 
                    nome='1' 
                    valor='1' 
                    onClick={() => this.props.onClickDigito ('1')}
                />
                <Botao 
                    nome='2' 
                    valor='2' 
                    onClick={() => this.props.onClickDigito ('2')}
                />
                <Botao 
                    nome='3' 
                    valor='3' 
                    onClick={() => this.props.onClickDigito ('3')}
                />
                <Botao 
                    nome='+' 
                    valor='+' 
                    operacao 
                    onClick={() => this.props.onClickOperacao('+')}
                />
                <Botao 
                    nome='0' 
                    valor='0' 
                    duplo 
                    onClick={() => this.props.onClickDigito ('0')}
                />
                <Botao 
                    nome='.' 
                    valor='.' 
                    onClick={() => this.props.onClickDigito ('.')}
                />
                <Botao 
                    nome='=' 
                    valor='=' 
                    operacao 
                    onClick={() => this.props.onClickOperacao('=')}
                />
            </View>
        );
    }
}