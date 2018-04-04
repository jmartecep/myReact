import React, { Component } from 'react';
//import './Assets/css/default.min.css';
//import logo from './logo.svg';
//import './App.css';

class Header extends Component {
  render() {
    return (
    <div className="container">
      <header className ="row oneRow title">
        <div className = "col-md-3"></div>
        <div className = "col-md-6 ">
          <h1 className="display-4 text-center">NY Times!</h1>
          <hr className="my-6"></hr>
          <h3 className="text-center">Search and Annotate Articles of Interest!</h3>
        </div>
        <div className = "col-md-3"></div>
      </header>
    </div>
    );//END RETURN

  }//END RENDER

}

export default Header;
