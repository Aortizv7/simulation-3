import React, { Component } from 'react';
import './App.css';
import Router from './Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
        <Router />
      </div>
    );
  }
}

export default App;
