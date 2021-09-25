import React from "react";
import styled from 'styled-components';

const Container = styled.div `
display: block;
`

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

const ContainerInput = styled.div `
display: flex;
justify-content: center;
align-items: flex-end;
height: 20px;
padding: 10px;
margin: 20px;
gap: 8px;
`

const Input = styled.input`
height: 20px;
`

const Button = styled.button`
height: 28px;   
width: 100px;
background-color: #006400;
color: white;
border-radius: 4px;
&:hover {
background-color: #005000;
cursor: pointer;
}
`

const NomeTexto = styled.div`
width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`

export class Inputs extends React.Component {
    state = {
        listaMensagens: [],
        nomeUsuario:  "",
        mensagemUsuario: ""
    }

alterarNome = (event) => {
    this.setState({nomeUsuario: event.target.value});
}

novaMensagem = (event) => {
    this.setState({mensagemUsuario: event.target.value});
}

onClickEnviar = () => {
    const novaMensagem = {
        usuario: this.state.nomeUsuario,
        texto: this.state.mensagemUsuario
    }

    const novasMensagens = [novaMensagem, ...this.state.listaMensagens]

    this.setState({
        listaMensagens: novasMensagens, listaMensagens: ""
    })

}

render () {
    return (
        <Container>
            <ContainerMensagem>
                {this.state.listaMensagens.map((mensagem) => {
                    return (
                        <NomeTexto> {mensagem.usuario}: {mensagem.texto} </NomeTexto>
                    )
                })}
                </ContainerMensagem>
        <ContainerInput>
        <Input 
        placeholder="Usuário"
        value={this.state.nomeUsuario} 
        onChange={this.alterarNome} 
        />
        <Input 
        placeholder="Digite sua mensagem"
        value={this.state.mensagemUsuario}
        onChange={this.novaMensagem} 
        />
        <Button onClick={this.onClickEnviar}> Enviar </Button>
        </ContainerInput>
        </Container>
        )
    }
}


export default Inputs;