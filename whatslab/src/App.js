import React from 'react';
import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
background-color: #006400;
color: white;
height: 80px;
width: 100vw;
padding-left: 20px;
margin: 0;
box-sizing: border-box;
`

const Container = styled.div `
width: 70vw;
height: 75vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
border: 1px solid black; 
margin-left: 15vw;
margin-top: 20px;
`

const ContainerMensagem = styled.div `
flex-grow: 1;
display: flex;
flex-direction: column-reverse;
gap: 16px;
padding-bottom: 10px;
margin-left: 25px;
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

const InputNome = styled.input`
width: 120px;
`

const InputMensagem = styled.input`
height: 20px;
flex-grow: 1;
`

const Button = styled.button`
height: 26px;   
width: 100px;
background-color: #006400;
color: white;
border-radius: 4px;
&:hover {
background-color: #005000;
cursor: pointer;
}
`

// const NomeTexto = styled.div`
// width: 300px;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   border: 1px solid black;
//   padding: 10px;
//   margin: 10px;
// `


class App extends React.Component {
  state = {
    mensagens: [],
    nomeUsuario:  '',
    mensagemUsuario: ''
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

const novasMensagens = [novaMensagem, ...this.state.mensagens]

this.setState({
    mensagens: novasMensagens, mensagemUsuario: ""
})

}

  render () {
    console.log(this.state.nomeUsuario)
    console.log(this.state.mensagemUsuario)
  return (
    <div className="App">
        <Titulo>WhatsLab</Titulo>
        <header className="App-header">
        </header>
    <Container>
        <ContainerMensagem>
        {this.state.mensagens.map((message, index) => {
            return <p key={index}>
              <strong>{message.usuario}</strong>: {message.texto}
            </p>
          })}
    </ContainerMensagem>
    <ContainerInput>
    <InputNome  
    placeholder="Usuário"
    value={this.state.nomeUsuario} 
    onChange={this.alterarNome} 
    />
    <InputMensagem 
    placeholder="Digite sua mensagem"
    value={this.state.mensagemUsuario}
    onChange={this.novaMensagem} 
    />
    <Button onClick={this.onClickEnviar}> Enviar </Button>
    </ContainerInput>
    </Container>
    </div>
    )
}



}

export default App;