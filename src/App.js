
import React, { Component } from "react";
import inicialState from "./config/inicialState";
import Render from "./components/Render";

export default class App extends Component {
    state = { ...inicialState };

    constructor(props){
        super(props);
        this.clickNoDigito = this.clickNoDigito.bind(this);
        this.clickNoLimpar = this.clickNoLimpar.bind(this);
        this.clickNoOperacao = this.clickNoOperacao.bind(this);
    }

    clickNoDigito = digito => {
        if(this.state.operacao === undefined){
            if (digito === '.' && this.state.valor1.includes('.')){
                return;
            }
            if((this.state.valor1 ? this.state.valor1 : '').length >= 8){
                return;
            }
            this.setState ({
                valor1: `${(this.state.valor1 === undefined ? '' : this.state.valor1)}` + `${digito}`,
                tela: `${(this.state.valor1 === undefined ? '' : this.state.valor1)}` + `${digito}` 
            });
        }
        else {
            if (digito === '.' && this.state.valor2.includes('.')){
                return;
            }
            if((this.state.valor2 ? this.state.valor2 : '').length >= 8){
                return;
            }
            this.setState ({
                valor2: `${(this.state.valor2 === undefined ? '' : this.state.valor2)}` + `${digito}`,
                tela: `${(this.state.valor2 === undefined ? '' : this.state.valor2)}` + `${digito}`
            });
        }
    }

    clickNoLimpar = () => {
        this.setState({
            ...inicialState
        });
    }

    clickNoOperacao = operacao => {
        if (this.state.valor1 === undefined){
            return;
        }

        if (
            (
                operacao === '*'
                    ||
                operacao === '/'
                    ||
                operacao === '-'
                    ||
                operacao === '+'
            )
        ){
            if (this.state.operacao === undefined){
                this.setState({
                    operacao
                });
            }
            else if (this.state.valor2 !== undefined){
                this.setState({
                    valor1: eval(`${this.state.valor1} ${this.state.operacao} ${this.state.valor2}`),
                    valor2: undefined,
                    operacao,
                    tela: eval(`${this.state.valor1} ${this.state.operacao} ${this.state.valor2}`)
                });
            }
        }
        else if (operacao === '=' && this.state.valor1 !== undefined && this.state.valor2 !== undefined){
            this.setState({
                valor1: undefined,
                valor2: undefined,
                operacao: undefined,
                tela: eval(`${this.state.valor1} ${this.state.operacao} ${this.state.valor2}`)
            });
        }
    }

    render (){
        const mostarValor = this.state.tela === undefined ? 0 : this.state.tela;
        return (
            <Render
                TValor={`${mostarValor}`}
                onClickDigito={this.clickNoDigito}
                onClickLimpar={this.clickNoLimpar}
                onClickOperacao={this.clickNoOperacao}
            />
        );
    }
}