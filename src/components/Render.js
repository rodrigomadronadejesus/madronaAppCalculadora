
import React, { Component } from "react";
import {
    SafeAreaView
} from 'react-native';

import Styles from '../styles/Render';
import Botao from "./Botao";


export default class Render extends Component {
    
    render (){
        return (
            <SafeAreaView style={Styles.Container}>
                <Botao nome='X' valor='X' duplo/>
            </SafeAreaView>
        );
    }
}
