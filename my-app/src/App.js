import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect,Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import axios from 'axios';
import logo from './logo.svg';
// import Main from './pages/Main.js'
import store from "./js/store/index";
import './App.css';

class App extends Component {
  render() {
    // const Main =() => <Main/>;
    return (
      <div style={{height:'100%'}}>
      <Provider store={store}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </Provider>

      </div>
    );
  }
}

export default App;
