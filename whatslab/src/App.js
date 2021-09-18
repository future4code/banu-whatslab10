  
import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import { Mensagens } from './components/Mensagens';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>WhatsLab</h1>
        <header className="App-header">
        </header>
        <body>{Mensagens}</body>
        <Inputs />
      </div>
    )
  }
}

export default App;
