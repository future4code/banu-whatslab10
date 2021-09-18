  
import React from 'react';
import './App.css';
import Inputs from './components/Inputs';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>WhatsLab</h1>
        <header className="App-header">
        </header>
        <Inputs />
      </div>
    )
  }
}

export default App;
