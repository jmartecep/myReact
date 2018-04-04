import React, { Component } from 'react';
//import './Assets/css/default.min.css';
//import logo from './logo.svg';
//import './App.css';

//components
import Search from './search';

class Body extends Component {
  render() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <Search />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5"></div>
        </div>
    </div>
    );//END RETURN

  }//END RENDER

}

export default Body;