import React, { Component } from "react";
import { View } from "react-native";

import Botao from "../components/Botao";
import Styles from '../styles/Teclado';

export default class Teclado extends Component {
    render (){
        return (
            <View style={Styles.Teclado}>
                <Botao nome='AC'valor='AC' triplo/>
                <Botao nome='/' valor='/' operacao/>
                <Botao nome='7' valor='7'/>
                <Botao nome='8' valor='8'/>
                <Botao nome='9' valor='9'/>
                <Botao nome='*' valor='*' operacao/>
                <Botao nome='4' valor='4'/>
                <Botao nome='5' valor='5'/>
                <Botao nome='6' valor='6'/>
                <Botao nome='-' valor='-' operacao/>
                <Botao nome='1' valor='1'/>
                <Botao nome='2' valor='2'/>
                <Botao nome='3' valor='3'/>
                <Botao nome='+' valor='+' operacao/>
                <Botao nome='0' valor='0' duplo/>
                <Botao nome='.' valor='.'/>
                <Botao nome='=' valor='=' operacao/>
            </View>
        );
    }
}