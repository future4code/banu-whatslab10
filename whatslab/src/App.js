import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import { Mensagens } from './components/Mensagens';
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
`


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Titulo>WhatsLab</Titulo>
        <header className="App-header">
        </header>
        <Mensagens />
        <Inputs />
      </div>
    )
  }
}

export default App;