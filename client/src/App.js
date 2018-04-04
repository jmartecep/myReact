import React, { Component } from 'react';
import './Assets/css/default.min.css';
//import logo from './logo.svg';
//import './App.css';

//Components
import Header from './components/header';
import Body from './components/body';
//import Nav    from './components/nav';

class App extends Component {
  render() {
    return (
      //<div className="App"></div>
      <div className="container-fluid">
        <Header />
        <Body />
      </div>//END CONTAINER FLUID
      
    );//end return
  }//end render
}//end App

export default App;
