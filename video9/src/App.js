import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h2>welcome</h2>
       <Greet className="Greet" fName="its me"></Greet>
       <Greet Gender="male"></Greet>
       <Greet></Greet>
      </div>
    );
  }
}

export default App;
