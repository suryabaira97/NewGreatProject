import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect,provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import axios from 'axios';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="App-footer">
         looking for a Footer
        </footer>
      </div>
    );
  }
}

export default Footer;
