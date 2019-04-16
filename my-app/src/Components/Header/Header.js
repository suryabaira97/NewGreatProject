import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect,provider} from 'react-redux';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="appHeader">
         looking for a Header
        </header>
      </div>
    );
  }
}

export default Header;
