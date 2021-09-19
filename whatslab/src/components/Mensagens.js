import React from "react";
import styled from "styled-components";

const ContainerMensagem = styled.div `
width: 50vw;
height: 75vh;
display: flex;
flex-direction: column-reverse;
justify-content: flex-start;
border: 1px solid black; 
margin-left: 25vw;
margin-top: 20px;
`

export class Mensagens extends React.Component {
    state = {
        mensagens: [],
        nome:  "",
        mensagem: ""
    }

onClickEnviar = () => {
    const novaMensagem = {
        nome: this.state.nome,
        mensagem: this.state.mensagem
    }

    const novasMensagens = [novaMensagem, ...this.state.mensagens]

    this.setState({mensagens: novasMensagens, mensagens: ""})

}


    render() {
        return (
            <ContainerMensagem>
                 {this.state.mensagens.map((texto, indice) => {
            return <p key={indice}>
              <strong>{texto.nome}</strong>: {texto.mensagem}
            </p>
          })}
            </ContainerMensagem>
        )
    }
}