import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect,provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import axios from 'axios';
import logo from '../logo.svg';
import '../App.css';

class NoPage extends Component {
  render() {
    return (
      <div>
          Theres No Page in here CLick here to redirect
          <a href="Localhost:3000"/>
      </div>
    );
  }
}

export default NoPage;
