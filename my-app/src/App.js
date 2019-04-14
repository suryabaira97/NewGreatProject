import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,withRouter} from 'react-router-dom';
import {connect,Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import axios from 'axios';
import logo from './logo.svg';
import Main from './Pages/Main'
import Landing from './Pages/LandingPage'
import NoPage from './Pages/NoPage'
import store from "./js/store/index";
import './App.css';

class App extends Component {
  render() {
    // const Main =() => <Main/>;/
    return (
      <div style={{height:'100%'}}>
      <Provider store={store}>
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component = {Main}></Route>
      <Route path="/Landing" exact component = {Landing}></Route>
      <Route path="/NoPage" exact component = {NoPage}></Route>
      </Switch>
      </BrowserRouter>
      
      </Provider>

      </div>
    );
  }
}

export default App;
