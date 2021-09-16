import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import { Mensagens } from './components/Mensagens';

class App extends React.Component {
  render () {
    return (
      <div>
        <Mensagens />
      </div>
    )
  }
}

export default App;