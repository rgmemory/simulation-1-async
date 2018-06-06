import React, { Component } from 'react';
// import './App.css';
import Homepage from './components/Homepage/Homepage';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';
import Addbin from './components/Addbin/Addbin';
import Header from './components/Header/Header'

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
      
      {routes}
        
      </div>
    );
  }
}

export default App;
