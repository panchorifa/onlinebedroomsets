import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Online Bedroom Sets</h2>
        </div>
        <p className="App-intro">
          Welcome to your online store
        </p>
      </div>
    );
  }
}

export default App;
