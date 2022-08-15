import './App.css';
import React from 'react';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return(
      <div className='main-box'>
      <Pokedex />
      </div>
    );
  }
}

export default App;
