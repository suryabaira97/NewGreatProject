import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {connect,provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import axios from 'axios';
import logo from '../logo.svg';
import '../App.css';
import {addArticle} from '../js/actions/index'

class Landing extends Component {
    myfunction= ()=>{
        this.props.addArticle({id:"myname"});
    }
    
  render() {
    return (
      <div>
       This is a Landing Page
       {console.log(this.props.articles)}
       <input type="button" onClick={this.myfunction}/>
      </div>
    );
  }
}
const mapStateToProps = (state,ownprops) =>{
    return {
        articles :state.articles,

    }

}
const mapDispatchToProps = dispatch =>{
    return{
        addArticle: article => dispatch(addArticle(article)),
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing));
