import React, { Component } from 'react';
//import './Assets/css/default.min.css';
//import logo from './logo.svg';
//import './App.css';



class Search extends Component {
  render() {
    return (
    <div className="mycontain">
        <div className="row">
            <header className="col-md-12 search text-center">
                <h3>Search Parameters</h3>
            </header>
        </div>

        <div className="form-group">
            <form>
                <div className="searchForm">
                <div className="form-group">
                    <label for="topic">Topic</label>
                    <input className ="form-control" placeholder="Enter Topic"></input>
                </div>
                <div className="form-group">
                     <label for="exampleFormControlSelect1">Number of Articles</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>5</option>
                            <option>10</option>
                        </select>
                </div>
                <div className="form-group">
                    <label for="startYear">Start Year</label>
                    <input className ="form-control" placeholder="Enter Start Year"></input>
                </div>
                <div className="form-group">
                    <label for="endYear">End Year</label>
                    <input className ="form-control" placeholder="Enter End Year"></input>
                </div>
                <div className= "row">
                    <div className="col-md-5">
                        <button id = "run-search" type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <button id = "clear-all" typ="clear"class="btn btn-primary">Clear Results</button>
                    </div>

                </div>
                

                
                </div>
            </form>
        </div>
        
    </div>//End Container

    );//END RETURN

  }//END RENDER

}

export default Search;