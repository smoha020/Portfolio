import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import Projects from './Components/Projects'
import Youtube from './Components/Youtube'
import Nav from './Components/Nav'


class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      greet: 'nice to meet you'
    }
  }
  
  render() {
    return (
      <Router>
        <Nav />
          <div className='content'>
            <Route exact path="/" render={props => ( <Profile
                greet={this.state.greet} />) }/>
            <Route exact path="/Projects" render={props => ( <Projects
                greet={this.state.greet} />) }/>
            <Route exact path="/Youtube" render={props => ( <Youtube
                greet={this.state.greet} />) }/>
          </div>
      </Router>
    )
  }
}

export default App;
