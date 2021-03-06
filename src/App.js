import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  pageSize = 30
  apiKey  = process.env.REACT_APP_MOVIE_API_KEY
  
  render() {
    console.log(` vlaue is  ${process.env.REACT_APP_MOVIE_API_KEY}`)
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route  path="/general"  element={<News key = "general" pageSize={this.pageSize} apiKey = {this.apiKey}  country="in" category="general"/>} />
            <Route  path="/business" element=  {<News key="business" pageSize={this.pageSize} apiKey = {this.apiKey} country="in" category="business"/>} />
            <Route  path="/entertainment" element= {<News key="entertainment" pageSize={this.pageSize} apiKey = {this.apiKey} country="in" category="entertainment" />}/>
            <Route path="/health" element= {<News key= "health" pageSize={this.pageSize}apiKey = {this.apiKey}  country="in" category="health" />}/>
            <Route path="/science" element= {<News key= "science" pageSize={this.pageSize} apiKey = {this.apiKey} country="in" category="science" />}/>
            <Route  path="/sports" element=  {<News key = "sports" pageSize={this.pageSize}apiKey = {this.apiKey}  country="in" category="sports" />}/>
            <Route  path="/technology" element= {<News key ="technology" pageSize={this.pageSize} apiKey = {this.apiKey} country="in" category="technology" />}/>
          </Routes>
        </Router>
      </div>






    )

  }
}

