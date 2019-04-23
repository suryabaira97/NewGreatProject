import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect,provider} from 'react-redux';
import './Header.css';
import { Home,Search ,ThreeDRotation ,More} from '@material-ui/icons';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="appHeader">
        <Home className="homeIcon"></Home>
        <div className="search-field">
        <Search className="searchIcon"></Search>
        <input className="search"></input>
        </div>
        {/* <More className="MoreIcon"></More> */}
        </header>
      </div>
    );
  }
}

export default Header;
