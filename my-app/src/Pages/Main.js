import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect,provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import axios from 'axios';
import logo from '../logo.svg';
import Header from '../Components/Header/Header'
import '../App.css';
import Footer from '../Components/Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
