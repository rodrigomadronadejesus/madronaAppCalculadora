
import React, { Component } from "react";
import {
    SafeAreaView
} from 'react-native';

import Styles from '../styles/Render';
import Tela from "./Tela";
import Teclado from "./Teclado";


export default class Render extends Component {
    
    render (){
        return (
            <SafeAreaView style={Styles.Container}>
                <Tela valor={20}/>
                <Teclado/>
            </SafeAreaView>
        );
    }
}
