import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';
import Addbin from './components/Addbin/Addbin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Shelf />
        <Bin />
        <Addbin />
      </div>
    );
  }
}

export default App;
