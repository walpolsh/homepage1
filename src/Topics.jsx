import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Api from './Api';
import DrumMachine from './DrumMachine';
import './topics.css';

const Topics = () => (
  <Router>
    <div className="tab">
      <ul>
        <h1>
          Here are a few components I've built with React!
        </h1>
      </ul>

      <hr/>

      <DrumMachine />
      <Api />
    </div>
  </Router>
);

export default Topics;
