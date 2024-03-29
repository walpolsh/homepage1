import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import './App.css';
import './nav.css';
import Music from './components/Music';
import Footer from './Footer';

class App extends Component {
  render() {
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };
    return (
      <Router>
        <div>
          <div className='topnav' id='myTopnav'>
            <Link className="navitem" to="/homepage">Home Page</Link>
            {'       '}
            <Link className="navitem" to="/music">My Music</Link>
            {'       '}
            <a className="icon" onClick={myFunction}>
              <button className="fa fa-beer"></button>
            </a>
          </div>
          <div>
            <Route exact path="/homepage" component={Home}></Route>
            <Route path="/music" component={Music}></Route>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
